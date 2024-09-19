import React from 'react'
import { useAuth } from "../AuthContext";

const Protected = () => {
  const { user, logout } = useAuth();
  return (
    <div className='protected'>
      <h2>Protected Page</h2>
      <p>Welcome {user?.email}</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default Protected
