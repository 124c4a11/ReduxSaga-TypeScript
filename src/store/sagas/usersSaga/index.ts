import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getUsers } from '../../../API/getUsers';
import { IUser } from '../../../interfaces/IUser';
import { usersFetchFailure, usersFetchSuccess } from '../../reducers/usersReducer/usersActions';
import { UsersActions } from '../../reducers/usersReducer/usersTypes';


export function* fetchUsers() {
  try {
    const data: IUser[] = yield call(getUsers);

    yield put(usersFetchSuccess(data));
  } catch (err) {
    if (err instanceof Error) {
      yield put(usersFetchFailure(err.message));
    } else {
      yield put(usersFetchFailure('Something went wrong!'));
    }
  }
}


export function* usersSaga() {
  yield all([
    takeLatest(UsersActions.USERS_FETCH_REQUEST, fetchUsers)
  ]);
}
