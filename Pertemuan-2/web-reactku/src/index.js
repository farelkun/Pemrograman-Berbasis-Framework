import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function Football() {
  const shoot = () => {
    alert("Farel Putra Hdiayat");
  }

  return (
    <marquee><button onClick={shoot}>Click me!</button></marquee>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();