import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Sidebar from "../../../components/Sidebar";

const { shallow } = Enzyme;

it("Sidebar should display app name which is Mail", () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper.find("#app-name").text()).toEqual("Mail");
});
