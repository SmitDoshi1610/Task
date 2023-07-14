import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users,setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
    <h1 className='heading'>Users Details</h1>
    <div className='container'>
      {
      users.map( user => {
        {/* console.log(user); */}
        return(
          <div className='card' key = {user.id}>
            <h3 className='title'>Title</h3>
            <p>{user.title}</p>
            <h4 className='body'>Body</h4>
            <p>{user.body}</p>
          </div>
        )
      })
    }
    </div>
    </div>
  );
}

export default App;
