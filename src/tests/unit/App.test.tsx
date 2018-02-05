import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
// @ts-ignore
import * as SplitPane from "react-split-pane";

import App from "../../App";
import Sidebar from "../../components/Sidebar";
import List from "../../components/List";

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

it("should render a split pane", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(SplitPane).length).toEqual(2);
});

it("splitpane should render 3 panes", () => {
  const wrapper = shallow(<App />);
  const splitpanes = wrapper.find(SplitPane);

  expect(splitpanes.at(0).find(".sidebar-pane").length).toEqual(1);
  expect(splitpanes.at(1).find(".list-mail-pane").length).toEqual(1);
  expect(splitpanes.at(0).find(".content-pane").length).toEqual(1);
});

it("1st pane should render Sidebar", () => {
  const wrapper = shallow(<App />);
  const firstPane = wrapper
    .find(SplitPane)
    .at(0)
    .find(".sidebar-pane");
  expect(firstPane.find(Sidebar).length).toEqual(1);
});

it("2nd pane should render List", () => {
  const wrapper = shallow(<App />);
  const secondPane = wrapper
    .find(SplitPane)
    .at(0)
    .find(".list-mail-pane");
  expect(secondPane.find(List).length).toEqual(1);
});
