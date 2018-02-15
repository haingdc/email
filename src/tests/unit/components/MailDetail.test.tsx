import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import App, {
  MailDetailProps as Props,
  MailDetail,
  State as AppState,
} from "../../../App";

Enzyme.configure({ adapter: new Adapter() });

const { shallow, mount } = Enzyme;

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

it("should render content from <App />", () => {
  const wrapper = mount<object, AppState>(<App />);
  (wrapper.instance() as App).openMail(1);
  wrapper.update();
  expect(wrapper.find(MailDetail).text()).toEqual(
    // tslint:disable-next-line:max-line-length
    "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  );
});
