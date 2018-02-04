import * as React from "react";

import "./App.css";
// @ts-ignore
import * as SplitPane from "react-split-pane";

const logo = require("./logo.svg");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize="50%" />
      </div>
    );
  }
}

export default App;
