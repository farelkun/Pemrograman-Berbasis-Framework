import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import HelloComponent from './component/HelloComponent';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';

// ReactDOM.render(
//     <Login/>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <Test/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
