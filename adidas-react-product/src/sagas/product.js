import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_PRODUCTS, SET_PRODUCTS, GET_PRODUCT_DETAILS} from '../actions';
import axios from 'axios';


export const watchGetProducts = function* ()  {
    
    yield takeLatest(GET_PRODUCTS, handleGetProducts);
}
export const watchGetProductDetails = function* ()  {
    yield takeLatest(GET_PRODUCT_DETAILS, handleGetProductDetails);
}

function* handleGetProducts() {
    try {
        const uri = 'http://localhost:3001/product';
        const result = yield call(axios.get, uri);
        yield put({ type: SET_PRODUCTS, value: result.data });
        console.log('get products:', result.data);
      } 
      catch {
        console.log('Failed To Load list');
      }
}
function* handleGetProductDetails(action) {
    try {
        const uri = `http://localhost:3001/product/${action.value}`;
        const result = yield call(axios.get, uri);
        yield put({ type: GET_PRODUCT_DETAILS, value: result.data });
        console.log('get product details:', result.data);
      } 
      catch {
        console.log('Failed To Load product details');
      }
}

