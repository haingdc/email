import * as React from "react";
import New from "./New";
import Accounts from "./Accounts";

export default function Sidebar() {
  return (
    <div>
      <div id="app-name">Mail</div>
      <New />
      <Accounts />
    </div>
  );
}
