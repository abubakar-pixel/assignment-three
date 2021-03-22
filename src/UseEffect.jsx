import { useState, useEffect } from "react";
import "./index.css";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='header'>USeEffect</h1>
      {users.map((user, i) => (
        <div className='main-cnt' key={i}>
          <h5 className='usernames__cnt'>
            <strong className='usernames'>Name:</strong> {user.name}
          </h5>
          <p className='user-email__cnt'>
            <strong className='user-email'>Email:</strong> {user.email}
          </p>
          <p className='usernames__cnt'>
            <strong className='usernames'>Username:</strong> {user.username}
          </p>
          <p className='phone-number'>
            <strong className='phone-number__cnt'>Phone Number:</strong> {user.phone}
          </p>
          <p className='site__cnt'>
            <strong className='site'>Website:</strong> {user.website}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UseEffect;
