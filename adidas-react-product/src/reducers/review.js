
import { GET_PRODUCT_REVIEWS } from '../actions';

const reviews = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCT_REVIEWS:
      return [...action.value];
    default: return state;
  }
}

export default reviews;