import React, {useState } from 'react';
import { Auth } from '../Context/AuthProvider';


export const HomaPage = () => {

  const { user } = Auth();

  const [data, setData] = useState([
    { id: 1, name: 'user 1', description: 'Description 1' },
    { id: 2, name: 'user 2', description: 'Description 2' },
  ]);

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome, {user && user.username}!</p>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
