import { call, put } from 'redux-saga/effects';

import { fetchUsers } from '.';
import { getUsers } from '../../../API/getUsers';
import { usersFetchFailure, usersFetchSuccess } from '../../reducers/usersReducer/usersActions';


const users = [{ id: 1, name: 'username' }];


describe('USERS SAGA', () => {
  it('fetching users', () => {
    const g = fetchUsers();

    expect(g.next().value).toEqual(call(getUsers));


    expect(g.next(users).value).toEqual(put(usersFetchSuccess(users)));
    expect(g.next().done).toBe(true);
  });
});


describe('FETCH USERS BRANCHING', () => {
  it('put users data to store if no errors', () => {
    const g = fetchUsers();

    expect(g.next().value).toEqual(call(getUsers));
    expect(g.next(users).value).toEqual(put(usersFetchSuccess(users)));
    expect(g.next().done).toBe(true);
  });

  it('put error data to store if an error was thown', () => {
    const g = fetchUsers();
    const errorMsg = 'Error message';

    g.next();

    expect(g.throw(new Error(errorMsg)).value).toEqual(put(usersFetchFailure(errorMsg)));
  });

  it('put "something went wrong" error if an error of unknown type was thrown', () => {
    const g = fetchUsers();
    const errorMsg = 'Something went wrong!';

    g.next();

    expect(g.throw({}).value).toEqual(put(usersFetchFailure(errorMsg)));
    expect(g.next().done).toBe(true);
  });
});
