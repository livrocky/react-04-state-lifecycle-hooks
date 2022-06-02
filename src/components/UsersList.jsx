// Komponentas kuris tik uzsikrovus
// parsiuncia users duomenis is typicode placeholder
// ir juos atvaizduoja

import { useEffect, useState } from 'react';

const userDummyData = [
  { id: 1, name: 'James' },
  { id: 2, name: 'Jill' },
  { id: 3, name: 'Mike' },
];

function UsersList() {
  console.log('UsersList ran ====');
  const [usersArray, setUsersArray] = useState([]);

  async function getUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataInJs = await resp.json();
    setUsersArray(dataInJs);
    // setUsersArray(userDummyData);
  }

  //   useEffect(() => {}, []) = pasileidzia tik viena karta po to kai sugeneruojamas komponentas

  useEffect(() => {
    console.log('UsersList useEffect ran ===');
    getUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {/* <ul>
        {usersArray.length === 0 && <h2>Loading users ....</h2>}
        {usersArray.map((uObj) => (
          <li key={uObj.id}>
            {uObj.name} email: {uObj.email}
          </li>
        ))}
      </ul> */}
      <hr></hr>
    </div>
  );
}

export default UsersList;
