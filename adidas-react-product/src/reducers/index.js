import products from './product';
import reviews from "./review";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    products: products,
    reviews: reviews
});

export default rootReducer;