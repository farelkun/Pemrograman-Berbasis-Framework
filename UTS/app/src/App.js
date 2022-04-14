import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import 'antd/dist/antd.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CodeSandboxOutlined,
  SettingOutlined,
  TableOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './Breadcumb.css'
import ProductDetail from './Market/ProductDetail'
import './App.css';
import MarketPage from './Market/MarketPage';
import Checkout from './Market/Checkout';
import Login from './Market/Login';
import CheckoutPage from './Market/CheckoutPage';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
// import MarketPage from './Market/MarketPage';
// import Checkout from './Market/Checkout';
// import Login from './Market/Login';
// import CheckoutPage from './Market/CheckoutPage';



class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {

    return (
      <Router>
        
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1" icon={<CodeSandboxOutlined />}>
                <Link to='/product'>
                  products
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<TableOutlined />}>
                <Link to='/checkout-page'>
                  Checkout

                </Link>
              </Menu.Item>
              {
                fakeAuth.authenticate == false ?
                  <Menu.Item key="3" icon={<SettingOutlined />}>

                    <Link to='/login'>
                      Login

                    </Link>
                  </Menu.Item> : <Menu.Item key="3" icon={<SettingOutlined />}>

                    <button className='btn btn-link' onClick={fakeAuth.signout}>
                      Auth

                    </button>
                  </Menu.Item>
              }
            </Menu>
          </Header>
          <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                height: '100vh'
              }}
            >
              <div className="card">
                <div className="card-body">
                  <Switch>
                    <Route exact path='/product'>
                      <MarketPage />
                    </Route>

                    <Route path='/product/:productId'>
                      <ProductDetail />
                    </Route>
                    <PrivateRoute path='/checkout-page'>
                      <CheckoutPage />
                    </PrivateRoute>

                    <Route path='/login'>
                      <LoginPage />
                    </Route>
                    <PrivateRoute path='/checkout/:dataId'>
                      {
                        console.log(fakeAuth.isAuthenticated)
                      }
                      <Checkout />
                    </PrivateRoute>
                  </Switch>
                </div>
              </div>
              {/* Content */}
            </Content>
          <Footer style={{ textAlign: 'center' }}>UTS ©2022 Farel Putra Hidayat</Footer>
        </Layout>
      </Router>
    );
  }
}

export default App



function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (children)
          : (<Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }} />)} />
  )
}

const fakeAuth = {
  isAuthenticated: false,
  account: '',
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    fakeAuth.account = document.getElementById('username').value
    setTimeout(cb, 100)
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    fakeAuth.account = document.getElementById('username').value = ''
    setTimeout(cb, 100)
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button onClick={() => { fakeAuth.signout(() => history.push("/")) }}>Sign Out</button>
    </p>
  ) : (<p>
    Welcome!{" "}
    <button onClick={() => { fakeAuth.signout(() => history.push("/")) }}>Sign Out</button>
  </p>
    // <p>You're not LoggedIn  </p>
  )
}


function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from)
    })
  }

  return (
    <Login onClick={login} />
  )
}

