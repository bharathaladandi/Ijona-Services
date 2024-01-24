import React, { useState } from 'react';
import {Auth} from '../Context/AuthProvider';
import { Navigate } from 'react-router-dom';

export const Ragister = () => {
    const { login, isAuthenticated } = Auth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
      };

      if (isAuthenticated()) {
        return <Navigate to="/homepage" />;
      }

    
      return (
        <div>
          <h2>Login Page</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    };
