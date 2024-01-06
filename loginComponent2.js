import React, { useRef } from "react";

function Login2() {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" ref={passwordRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login2;



