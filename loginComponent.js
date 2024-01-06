import React, { useState } from 'react';


function Login() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Details:', { username, password });
 };

 return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
 );
}

export default Login;


