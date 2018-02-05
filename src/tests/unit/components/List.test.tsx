import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import List from "../../../components/List";

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

describe("header", () => {
  it("should render an text field", () => {
    const wrapper = shallow(<List />);
    const header = wrapper.find("header");
    expect(header.find("input[type='text']").length).toEqual(1);
  });
});
