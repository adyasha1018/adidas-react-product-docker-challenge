import React from "react";
import { shallow } from "enzyme";
import ProductDetailComponent from "./product-detail.component";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

const props = {};

describe("ProductDetailComponent", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <ProductDetailComponent {...props} />
    </Provider>
  );
  it("should render ProductDetailComponent", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
