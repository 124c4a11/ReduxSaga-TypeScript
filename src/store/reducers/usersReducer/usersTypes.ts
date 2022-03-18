import { IUser } from '../../../interfaces/IUser';


export enum UsersActions {
  USERS_FETCH_REQUEST = 'USERS_FETCH_REQUEST',
  USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS',
  USERS_FETCH_FAILURE = 'USERS_FETCH_FAILURE',
}


export type UsersSuccessPayload = IUser[];


export type UsersFailurePayload = string;


export interface UsersFetchRequest {
  type: UsersActions.USERS_FETCH_REQUEST;
}


export interface UsersFetchSuccess {
  type: UsersActions.USERS_FETCH_SUCCESS;
  payload: UsersSuccessPayload;
}


export interface UsersFetchFailure {
  type: UsersActions.USERS_FETCH_FAILURE;
  payload: UsersFailurePayload;
}


export type UsersAction =
  | UsersFetchRequest
  | UsersFetchSuccess
  | UsersFetchFailure;


export interface UsersState {
  pending: boolean;
  users: IUser[];
  error: string | null;
}
