import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import UsersList from './components/UsersList';

function App() {
  // State - react componento specialus kintamasis nuo kurio gali priklausyti kaip atvsivaizduoja jsx
  console.log('<App /> ran');
  const [isLoggedInState, setIsLoggedInState] = useState(true);
  // const isLoggedInState = loggedStateResult[0]
  // console.log('isLoggedInState ===', isLoggedInState);

  let isLoggedIn = true;

  setTimeout(() => {
    // console.log('setTimeout ran ====================');
    isLoggedIn = false;
    // niekada tiesiogiai neprilyginam state jokiai reiksmei
    // isLoggedInState = false;
    // setIsLoggedInState(false);
    // console.log('isLoggedInState ===', isLoggedInState);
    // console.log('isLoggedIn ===', isLoggedIn);
  }, 3000);

  return (
    <div className='App container'>
      <h1>App</h1>
      <h2>isLoggedInState: {isLoggedInState.toString()}</h2>
      <h2>{isLoggedInState ? 'is logged' : 'is not logged in'}</h2>
      <Counter />
      <UsersList />
    </div>
  );
}

export default App;
