import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import reduxSaga from 'redux-saga';
import rootSaga from './sagas';

const getStore = () => {
    const initialState = {};
    const reduxSagaMiddleware = reduxSaga();
    const store = createStore(rootReducer, initialState, applyMiddleware(reduxSagaMiddleware));
    console.log("reached", rootSaga);
  reduxSagaMiddleware.run(rootSaga);
  return store;
}

export const store = getStore();