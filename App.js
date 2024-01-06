import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './loginComponent';
import Welcome from './welcomeComponent';
import Login1 from './loginComponent1';
import Welcome1 from './welcomeComponent'; 
import RegistrationForm1 from './RegistrationForm1';
import Login2 from './loginComponent2';
import Welcome2 from './welcomeComponent2';
import PageTitleUpdater from './PageTitleUpdater';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [valueD, setValueD] = useState(''); 
  const [buttonValue, setButtonValue] = useState('');

   
  return (
    <div className="App">
      <header className="App-header">
    <Login />
       <Welcome />
       <Login1 />
      <Welcome1 />
      <Login2 />
      <Welcome2 />
      <RegistrationForm1 />
      <PageTitleUpdater />
      </header>
    </div>
  );
}

export default App;


