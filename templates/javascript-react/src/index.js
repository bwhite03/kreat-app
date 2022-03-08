import { BrowserRouter } from "react-router-dom";
console.log("I am loaded");
const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
