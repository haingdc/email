import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import Hello from "./containers/Hello";
import { createStore } from "redux";

import { StoreState } from "./types/index";
import { enthusiasm } from "./reducers";
import { Provider } from "react-redux";
import App from "./App";

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript",
});

ReactDOM.render(
  // <Provider store={store}>
  //   <Hello />
  // </Provider>,
  <App />,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
