
import React, { useRef, useState } from 'react';


function Welcome2(props) {
    return (
      <div>
        <h1>{props.email}</h1>
        <p>{props.password}.</p>
      </div>
    );
  }
  export default Welcome2;