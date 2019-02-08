import * as React from "react";
import * as ReactDOM from "react-dom";

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider, connect } from 'react-redux';

import { Users } from "./components/ListUsers";

import { showLoadUsers } from './sagas';
import { UsersReducer } from "./redux/reducer_users";
import { loadUsers } from "./redux/action";

import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
	UsersReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(showLoadUsers);

store.dispatch(loadUsers());

ReactDOM.render(
  <Provider store={store}>
    <Users />
  </Provider>,
  document.getElementById('app-root')
);