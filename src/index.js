import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { enthusiasm } from "./reducers/index";

const store = createStore < StoreState > (enthusiasm, {});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
