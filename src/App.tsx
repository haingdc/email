import * as React from "react";

import "./App.css";
// @ts-ignore
import * as SplitPane from "react-split-pane";

const logo = require("./logo.svg");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize="50%">
          <SplitPane split="vertical" defaultSize="50%">
            <div className="sidebar-pane">
              <Sidebar />
            </div>
            <div className="list-mail-pane" />
          </SplitPane>
          <div className="content-pane" />
        </SplitPane>
      </div>
    );
  }
}

export function Sidebar() {
  return <div>this is sidebar</div>;
}

export default App;
