import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

window.onload = () => bootstrap();

function bootstrap() {
  const navigationItems = document.querySelectorAll(".navigation__item");

  navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", function (this: Element, event) {
      event.preventDefault();

      const id = this.getAttribute("href");

      document.querySelector(id!)?.scrollIntoView();
    });
  });
}
