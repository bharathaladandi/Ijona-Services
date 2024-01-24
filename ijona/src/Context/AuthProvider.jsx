import React, { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {


    const users = { username: 'ijona', password: 'password' };
    if (username === users.username && password === users.password) {
      setUser(users);
      localStorage.setItem('user', JSON.stringify(users));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = () => !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const Auth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, Auth };