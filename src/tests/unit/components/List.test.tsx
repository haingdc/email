import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { spy } from "sinon";

import List, { Props, EmailItem, State } from "../../../components/List";
import mockEmailList, { MockEmail } from "../../../mock/email_list";

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

const props: Props = {
  folderItem: "Inbox",
  emailList: mockEmailList,
  handleOpenMail: (id: number) => undefined,
};

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
    const listHeader = wrapper.find(".list header");
    expect(listHeader.length).toEqual(1);
  });

  it("header should render h3", () => {
    const wrapper = shallow(<List {...props} />);
    const listHeader = wrapper.find(".list header");
    expect(listHeader.find("h3").text()).toEqual("Inbox");
  });

  it("header should render .dropdown", () => {
    const wrapper = shallow(<List {...props} />);
    const dropdown = wrapper.find(".list header > .dropdown");
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

it("should have `folderItem` property", () => {
  const wrapper = shallow<Props, object>(<List {...props} emailList={[]} />);

  expect(wrapper.instance().props).toHaveProperty("emailList");
});

it("should render 1 email item", () => {
  const wrapper = shallow<Props, object>(
    <List
      {...props}
      emailList={([] as MockEmail[]).concat(props.emailList[0])}
    />,
  );
  expect(wrapper.find(EmailItem).length).toEqual(1);
});

it("should render 2 email items", () => {
  const wrapper = shallow<Props, object>(
    <List {...props} emailList={props.emailList.slice(0, 2)} />,
  );
  expect(wrapper.find(EmailItem).length).toEqual(2);
});

it("should have find state", () => {
  const wrapper = shallow<Props, State>(<List {...props} />);
  expect(wrapper.state().find).toEqual("");
});

it("input[text] should handle onChange", () => {
  const wrapper = shallow<Props, State>(<List {...props} />);
  const input = wrapper.find("#search input");
  input.simulate("change", { target: { value: "Resin" } });
  expect(wrapper.state().find).toEqual("Resin");
});

it("should toggle the dropdown", () => {
  const wrapper = Enzyme.mount<Props, State>(<List {...props} />);
  // at beginning
  expect(wrapper.find(".dropdown ul").hasClass("on")).toEqual(false);
  // 1st click
  (wrapper.instance() as List).toggleDropdown();
  wrapper.update();
  expect(wrapper.find(".dropdown ul").hasClass("on")).toEqual(true);
  // 2nd click
  (wrapper.instance() as List).toggleDropdown();
  wrapper.update();
  expect(wrapper.find(".dropdown ul").hasClass("on")).toEqual(false);
});
