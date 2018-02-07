import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import List from "../../../components/List";

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

describe("header", () => {
  it("should render an text field, find & X button", () => {
    const wrapper = shallow(<List />);
    const header = wrapper.find("header");
    expect(header.find("input[type='text']").length).toEqual(1);
    expect(header.find(".find-btn").length).toEqual(1);
    expect(header.find(".x-btn").length).toEqual(1);
  });
});

describe("list mail header", () => {
  it("should render header for mail list", () => {
    const wrapper = shallow(<List />);
    const listHeader = wrapper.find(".list > header");
    expect(listHeader.length).toEqual(1);
  });
});
