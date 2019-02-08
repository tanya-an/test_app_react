import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { UsersReducer } from "./Reducers";
import { showLoadUsers } from './Sagas';
import { loadUsers } from "./Actions";

const sagaMiddleware = createSagaMiddleware()
const _store = createStore(
	UsersReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(showLoadUsers);
_store.dispatch(loadUsers());


export const store = _store
