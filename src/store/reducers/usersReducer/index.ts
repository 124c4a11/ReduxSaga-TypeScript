import {
  UsersAction,
  UsersActions,
  UsersState
} from './usersTypes';


const initialState: UsersState = {
  pending: false,
  users: [],
  error: null,
};


export function usersReducer(
  state: UsersState = initialState,
  action: UsersAction
): UsersState {
  switch (action.type) {
    case UsersActions.USERS_FETCH_REQUEST:
      return { ...state, pending: true };

    case UsersActions.USERS_FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload,
        error: null
      };

    case UsersActions.USERS_FETCH_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };

    default:
      return action;
  }
}
