import * as React from "react";
import * as Imap from "imap";

import "./App.css";

import * as sp from "react-split-pane";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import mockEmailList, { MockEmail } from "./mock/email_list";

// tslint:disable-next-line:no-any
export const SplitPane: any = sp;

const logo = require("./logo.svg");

export interface State {
  folderItem: string;
  emailList: MockEmail[];
  mailDetail: string;
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
    this.state = {
      folderItem: "Inbox",
      emailList: mockEmailList,
      mailDetail: "",
    };
    this.openMail = this.openMail.bind(this);
  }

  openMail(id: number) {
    const { emailList } = this.state;
    const mailfound = emailList.find(m => m.id === id);

    if (mailfound) {
      this.setState({ mailDetail: mailfound.email.description });
    }
  }

  render() {
    const { folderItem, emailList, mailDetail } = this.state;
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
            <MailDetail content={mailDetail || ""} />
          </div>
        </SplitPane>
      </div>
    );
  }
}

export interface MailDetailProps {
  content: string;
}

export function MailDetail({ content }: MailDetailProps) {
  return <div>{content}</div>;
}

export default App;
