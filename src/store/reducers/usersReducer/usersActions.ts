import {
  UsersActions,
  UsersFailurePayload,
  UsersFetchFailure,
  UsersFetchRequest,
  UsersFetchSuccess,
  UsersSuccessPayload
} from './usersTypes';


export function usersFetchRequest(): UsersFetchRequest {
  return { type: UsersActions.USERS_FETCH_REQUEST };
}


export function usersFetchSuccess(
  payload: UsersSuccessPayload
): UsersFetchSuccess {
  return {
    type: UsersActions.USERS_FETCH_SUCCESS,
    payload,
  };
}


export function usersFetchFailure(
  payload: UsersFailurePayload
): UsersFetchFailure {
  return {
    type: UsersActions.USERS_FETCH_FAILURE,
    payload,
  };
}
