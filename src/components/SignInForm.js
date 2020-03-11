import React, { useState,useEffect } from "react";

const SignInForm = props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const sendToUpdateUserSignIn = (event) => {
    event.preventDefault();
    props.updateUserSignin({ username, password });
    document.getElementById('form33').reset()
  };

  const handlePassword = e => setPassword(e.target.value);
  const handleUsername = e => setUsername(e.target.value);

//   Not sure if this is necessary

  useEffect(() => {
    document.getElementById('form33').reset()
  }, []);

  return (
    <div>
      <h3>Signin form</h3>
      <form id="form33" onSubmit={() => sendToUpdateUserSignIn()}>
        {/* <label>Username: </label> */}
        <input
          onChange={handleUsername}
          type="text"
          placeholder="Username..."
          name="username"
        ></input>
        <br />
        {/* <label>Password: </label> */}
        <input
          onChange={handlePassword}
          type="password"
          placeholder="Password..."
          name="password"
        ></input>
      </form>
      <br />
      <button onClick={sendToUpdateUserSignIn}> SignIN</button>
    </div>
  );
};

export default SignInForm;
