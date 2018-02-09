import * as React from "react";

import "./App.css";
// @ts-ignore
import * as SplitPane from "react-split-pane";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import mockEmailList, { MockEmail } from "./mock/email_list";

const logo = require("./logo.svg");

export interface States {
  folderItem: string;
  emailList: MockEmail[];
}

class App extends React.Component<object, States> {
  constructor(props: object) {
    super(props);
    this.state = { folderItem: "Inbox", emailList: mockEmailList };
  }
  render() {
    const { folderItem } = this.state;
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize="50%">
          <SplitPane split="vertical" defaultSize="50%">
            <div className="sidebar-pane">
              <Sidebar />
            </div>
            <div className="list-mail-pane">
              <List folderItem={folderItem} />
            </div>
          </SplitPane>
          <div className="content-pane" />
        </SplitPane>
      </div>
    );
  }
}

export default App;
