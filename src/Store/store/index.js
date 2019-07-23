import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import loginReducer from "../../Reducer/reducers/lreducer";
import watcher from "../../Saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(loginReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcher);

export default store;
