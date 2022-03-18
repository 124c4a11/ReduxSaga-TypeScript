import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import { useAppSelector } from './hooks/reduxHooks';
import { usersFetchRequest } from './store/reducers/usersReducer/usersActions';


function App() {
  const { pending, users, error } = useAppSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersFetchRequest());
  }, [dispatch]);

  return (
    <div className="App">
      {pending && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>}
      {
        users &&
        <ul>
          {users.map(({ id, name }) => (
            <li key={id}>{id}. {name}</li>
          ))}
        </ul>
      }
    </div>
  );
}


export default App;
