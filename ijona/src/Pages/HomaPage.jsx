import React, { useContext, useState } from 'react';
import { Auth } from '../Context/AuthProvider';


export const HomaPage = () => {

  const { user, logout } = Auth();

  const [data, setData] = useState([
    { id: 1, name: 'user 1', description: 'Description 1' },
    { id: 2, name: 'user 2', description: 'Description 2' },
    { id: 3, name: 'user 3', description: 'Description 3' },
    { id: 4, name: 'user 4', description: 'Description 4' },
    { id: 5, name: 'user 5', description: 'Description 5' },
    { id: 6, name: 'user 6', description: 'Description 6' },
  ]);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome, {user && user.username}!</p>
      <button onClick={logout}>Logout</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
