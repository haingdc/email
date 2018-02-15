import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { MailDetailProps as Props, MailDetail } from "../../../App";

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

const props: Props = {
  content: "",
};

it("should render empty string content", () => {
  const wrapper = shallow<Props, object>(<MailDetail {...props} />);
  expect(wrapper.text()).toEqual("");
});

it("should render content", () => {
  const wrapper = shallow<Props, object>(
    <MailDetail {...props} content="gap nhau cuoi nam" />,
  );
  expect(wrapper.text()).toEqual("gap nhau cuoi nam");
});
