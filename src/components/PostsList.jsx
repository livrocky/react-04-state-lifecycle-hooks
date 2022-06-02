// Postu saraso komponentas kuris atvaizduoja pirmus 15 postu
// is https://jsonplaceholder.typicode.com/posts

// atvaizduosim postus paprasty korteliu pavidalu
import { useEffect, useState } from 'react';

function PostsList() {
  console.log('UsersList ran ====');
  const [postsArray, setPostsArray] = useState([]);

  async function getPosts() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataInJs = await resp.json();
    setPostsArray(dataInJs);
  }
  useEffect(() => {
    getPosts();
  });
  return (
    <ul>
      {postsArray.map((pObj) => (
        <li key={pObj.id}>{pObj.title}</li>
      ))}
    </ul>
  );
}
