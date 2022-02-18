import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './styles/index.scss';

const reactApp = document.createElement("div");
document.body.appendChild(reactApp);
ReactDOM.render(<App />, reactApp);