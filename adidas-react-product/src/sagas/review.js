import { takeLatest, call, put } from "redux-saga/effects";
import { GET_PRODUCT_REVIEWS, POST_PRODUCT_REVIEW } from "../actions";
import axios from "axios";

export const watchGetReviews = function* () {
  yield takeLatest(GET_PRODUCT_REVIEWS, handleGetReviews);
};
export const watchPostReview = function* () {
  yield takeLatest(POST_PRODUCT_REVIEW, handlePostReview);
};

function* handleGetReviews(action) {
  try {
    const uri = `http://localhost:3002/reviews/${action.value}`;
    const result = yield call(axios.get, uri);
    yield put({ type: GET_PRODUCT_REVIEWS, value: result.data });
    console.log("get reviews list:", result.data);
  } catch {
    console.log("Failed To Load reviews list");
  }
}
function* handlePostReview(action) {
  try {
    const uri = `http://localhost:3002/reviews/${action.value.productId}`;
    const result = yield call(axios.post, uri, action.value);
    yield put({ type: GET_PRODUCT_REVIEWS });
    console.log("add reviews :", result.data);
  } catch {
    console.log("Failed To add reviews ");
  }
}
