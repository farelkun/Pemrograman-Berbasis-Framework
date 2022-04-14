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
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './Breadcumb.css'
import DetailKitab from './Market/KitabDetail'
import './App.css';
import MarketPage from './Market/MarketPage';
import Checkout from './Market/Checkout';
import Login from './Market/Login';
import CheckoutPage from './Market/CheckoutPage';



const { Header, Sider, Content } = Layout;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr />
//         <Switch>
//           <Route exact path='/'>
//             <Home />
//           </Route>
//           <Route exact path='/about'>
//             <About />
//           </Route>
//           <Route exact path='/dashboard'>
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   )
// }
// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   )
// }
// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   )
// }


// export default function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Accoounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">amazon</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/:id" children={<Child />}></Route>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// function Child() {
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   )
// }


// export default function NestingExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>

//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//         <hr />
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   )
// }

// function Topics() {

//   let { path, url } = useRouteMatch();
//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${url}/Sate`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select at topic</h3>
//         </Route>
//         <Route path={`${path}/:topicId`} >
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   )
// }

// function Topic() {
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   )
// }

//  # AUTH

// export default function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />
//         <ul>
//           <li>
//             <Link to='/public'>Public Page</Link>
//           </li>
//           <li>
//             <Link to='/private'>Private Page</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path='/public'>
//             <PublicPage />
//           </Route>
//           <Route path='/login'>
//             <LoginPage />
//           </Route>
//           <PrivateRoute path='/private'>
//             <ProtectedPage />
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100)
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100)
//   }
// };

// function AuthButton() {
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button onClick={() => { fakeAuth.signout(() => history.push("/")) }}>Sign Out</button>
//     </p>
//   ) : (<p>
//     Welcome!{" "}
//     <button onClick={() => { fakeAuth.signout(() => history.push("/")) }}>Sign Out</button>
//   </p>
//     // <p>You're not LoggedIn  </p>
//   )
// }

// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (children)
//           : (<Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }} />)} />
//   )
// }

// function PublicPage() {
//   return <h3>Public</h3>
// }

// function ProtectedPage() {
//   return <h3>Private </h3>
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from)
//     })
//   }

//   return (
//     <div>
//       <p>You must Log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Login</button>
//     </div>
//   )
// }


//   #TUGAS
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
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">
              <img src='/images/logo.png' className='img-fluid' style={{ maxHeight: 80 }} />
              {/* <h1 style={{ fontWeight: 900, color: '#fff' }} >MYWEB</h1> */}
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to='/kitab'>
                  Kitabs
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to='/checkout-page'>
                  Checkout

                </Link>
              </Menu.Item>
              {
                fakeAuth.authenticate == false ?
                  <Menu.Item key="3" icon={<UploadOutlined />}>

                    <Link to='/login'>
                      Login

                    </Link>
                  </Menu.Item> : <Menu.Item key="3" icon={<UploadOutlined />}>

                    <button className='btn btn-link' onClick={fakeAuth.signout}>
                      Auth

                    </button>
                  </Menu.Item>
              }

            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                height: '100vh'
              }}
            >
              <Switch>
                <Route exact path='/kitab'>
                  <MarketPage />
                </Route>

                <Route path='/kitab/:kitabId'>
                  <DetailKitab />
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
              {/* Content */}
            </Content>
          </Layout>
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