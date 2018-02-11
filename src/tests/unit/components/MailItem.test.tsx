import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import mockEmailList, { MockEmail } from "../../../mock/email_list";
import { EmailItemProps, EmailItem } from "../../../components/List";

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

const props: EmailItemProps = {
  id: 1,
  name: "Medium Daily Digest",
  title: "mot cuoc thi dai dang dang",
  datetime: new Date(),
};

it("should render name", () => {
  const wrapper = shallow<EmailItemProps, object>(<EmailItem {...props} />);
  expect(
    wrapper
      .find("h2")
      .at(0)
      .text(),
  ).toEqual("Medium Daily Digest");
});

it("should render title", () => {
  const wrapper = shallow<EmailItemProps, object>(<EmailItem {...props} />);
  expect(
    wrapper
      .find("p")
      .at(0)
      .text(),
  ).toEqual("mot cuoc thi dai dang dang");
});
