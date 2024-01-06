import React from 'react';
import { UserContext } from './UserContext';


const Welcome1 = () => {
    const { username } = useContext(UserContext);
   
    return <h1>Welcome, {username}!</h1>;
           <h2>{password}</h2>;
   };
   
   export default Welcome1;

  