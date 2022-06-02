// generuoja li elementus is props
// level 2 - User generuoja korteles su pilna userio informacija is props

import { useEffect, useState } from 'react';

function Users() {
  console.log('UsersList ran ====');
  const [usersArray, setUsersArray] = useState([]);

  async function getUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataInJs = await resp.json();
    setUsersArray(dataInJs);
    // setUsersArray(userDummyData);
  }

  useEffect(() => {
    console.log('UsersList useEffect ran ===');
    getUsers();
  }, []);

  function User(props) {
    return (
      <ul>
        {props.length === 0 && <h2>Loading users ....</h2>}
        {usersArray.map(() => (
          <li key={props.id}>
            {props.name} email: {props.email}
          </li>
        ))}
      </ul>
    );
  }
}
export default Users;
