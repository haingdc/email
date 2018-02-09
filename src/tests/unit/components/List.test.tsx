import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import List, { Props } from "../../../components/List";

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

const props: Props = { folderItem: "Inbox" };

describe("header", () => {
  it("should render an text field, find & X button", () => {
    const wrapper = shallow(<List {...props} />);
    const header = wrapper.find("header");
    expect(header.find("input[type='text']").length).toEqual(1);
    expect(header.find(".find-btn").length).toEqual(1);
    expect(header.find(".x").length).toEqual(1);
  });
});

describe("list mail header", () => {
  it("should render header for mail list", () => {
    const wrapper = shallow(<List {...props} />);
    const listHeader = wrapper.find(".list > header");
    expect(listHeader.length).toEqual(1);
  });

  it("header should render h3", () => {
    const wrapper = shallow(<List {...props} />);
    const listHeader = wrapper.find(".list > header");
    expect(listHeader.find("h3").text()).toEqual("Inbox");
  });

  it("header should render .dropdown", () => {
    const wrapper = shallow(<List {...props} />);
    const dropdown = wrapper.find(".list > header > .dropdown");
    expect(dropdown.find("strong").text()).toEqual("All");
    expect(
      dropdown
        .find("ul a")
        .at(0)
        .text(),
    ).toEqual("Unread");
    expect(
      dropdown
        .find("ul a")
        .at(1)
        .text(),
    ).toEqual("Flagged");
    expect(
      dropdown
        .find("ul a")
        .at(2)
        .text(),
    ).toEqual("Sort By Date");
    expect(
      dropdown
        .find("ul a")
        .at(3)
        .text(),
    ).toEqual("Sort By Name");
  });
});
