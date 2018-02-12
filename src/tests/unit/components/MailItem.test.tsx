import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import mockEmailList, { MockEmail } from "../../../mock/email_list";
import { EmailItemProps, EmailItem } from "../../../components/List";
import { spy } from "sinon";

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

const props: EmailItemProps = {
  id: 1,
  name: "Medium Daily Digest",
  title: "mot cuoc thi dai dang dang",
  datetime: new Date("7/25/2017 11:28 AM"),
  handleOpenMail: (id: number) => undefined,
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

it("should render time", () => {
  const wrapper = shallow<EmailItemProps, object>(<EmailItem {...props} />);
  expect(
    wrapper
      .find("time")
      .at(0)
      .text(),
  ).toEqual("Tue 11:28 AM");
});

it("should call onClick when each mail item is clicked", () => {
  const openMailSpy = spy();
  const wrapper = shallow<EmailItemProps, object>(
    <EmailItem {...props} id={714} handleOpenMail={openMailSpy} />,
  );
  const article = wrapper.find("article");
  article.simulate("click");
  expect(openMailSpy.calledOnce).toEqual(true);
  expect(openMailSpy.calledWith(714)).toEqual(true);
});
