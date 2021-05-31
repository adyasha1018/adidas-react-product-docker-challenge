import React from "react";
import { shallow } from "enzyme";
import Homepage from "./homepage.component";
describe("Homepage", () => {
    const wrapper = shallow(<Homepage />)
    it("should render Homepage component", () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('div.homepage').exists()).toEqual(true);
      expect(wrapper.find('div.homepage').children().length).toEqual(2);
      expect(wrapper.find('div.homepage span.text').text()).toEqual("Welcome To Adidas World");
      expect(wrapper.find('div.homepage div.logo img').exists()).toEqual(true);
    });
});
