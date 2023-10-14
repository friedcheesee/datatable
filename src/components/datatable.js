import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserTable.css'; // Import a CSS file for styling (create this file in the same directory as your component)

const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch data using Axios
    axios.get('https://dummyjson.com/users') // Replace with the actual API endpoint
      .then(response => {
        setUserData(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <div className="user-table-container">
      <h2>User Data</h2>
      <table className="user-table">
        <thead>
          <tr className="thin-row">
            <th>Serial</th>
            <th>Profile Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td><img src={user.image} alt={`User ${user.id}`} style={{ width: '100px', height: '100px' }} /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
