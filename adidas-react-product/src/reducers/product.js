import { SET_PRODUCTS, GET_PRODUCT_DETAILS } from '../actions';

const products = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
    case GET_PRODUCT_DETAILS:
      return [...action.value];
    default: return state;
  }
}

export default products;