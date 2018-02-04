import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
// @ts-ignore
import * as SplitPane from "react-split-pane";

import App from "../../App";

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

it("should render a split pane", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(SplitPane).length).toEqual(1);
});
