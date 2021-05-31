import React from "react";
import { shallow } from "enzyme";
import ReviewComponent from "./review.component";
describe("Review", () => {
  const props = {
      id:"H332",
      reviews:[
        {
          productId: "H332",
          locale: "en-US,en;q=0.9",
          rating: 4,
          text: "this is review",
        },
      ]
  };
  const wrapper = shallow(<ReviewComponent {...props}/>);
  it("should render ReviewComponent", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
