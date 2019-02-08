import { put, takeEvery, call } from 'redux-saga/effects'
import { loadUsersSuccess } from './Actions'

export function* showLoadUsers() {
  yield takeEvery('LOAD_USERS', fetchUsers);
}

function* fetchUsers() {
  try {
  	const response = yield call(fetch, 'https://react.dev.altoros.com/users.json');
  	const responseBody = yield response.json();
  	yield put(loadUsersSuccess(responseBody));
  } catch (e) {
      yield console.log('ERROR', e);
      return;
    }
}