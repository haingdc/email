import * as React from "react";

import "./App.css";
// @ts-ignore
import * as SplitPane from "react-split-pane";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import mockEmailList, { MockEmail } from "./mock/email_list";

const logo = require("./logo.svg");

export interface State {
  folderItem: string;
  emailList: MockEmail[];
  mailDetail?: string;
}

export interface OpenMailFunc {
  (id: number): void;
}

export interface Props {
  openMail: OpenMailFunc;
}

class App extends React.Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { folderItem: "Inbox", emailList: mockEmailList };
    this.openMail = this.openMail.bind(this);
  }

  openMail(id: number) {
    this.setState({ mailDetail: "" + id });
  }

  render() {
    const { folderItem, emailList } = this.state;
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize="50%">
          <SplitPane split="vertical" defaultSize="50%">
            <div className="sidebar-pane">
              <Sidebar />
            </div>
            <div className="list-mail-pane">
              <List
                folderItem={folderItem}
                emailList={emailList}
                handleOpenMail={this.openMail}
              />
            </div>
          </SplitPane>
          <div className="content-pane">
            <MailDetail />
          </div>
        </SplitPane>
      </div>
    );
  }
}

export function MailDetail() {
  return <div>Mail Detail</div>;
}

export default App;
