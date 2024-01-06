
import React, { useState } from 'react';
// import Login from './loginComponent1';
// import Welcome from './welcomeComponent1';
import { UserContext } from './UserContext';


const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser({ username });
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ user, handleLogin }}>
        {user ? <Welcome /> : <Login />}
      </UserContext.Provider>
    </div>
  );
};

export default App;
