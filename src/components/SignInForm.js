import React, {useState} from "react";

const SignInForm = (props) => {

  const sendToUpdateUserSignIn = () => {
    props.updateUserSignin({
      username: "Basri",
      password: "password"
    });
  };

  return (
    <div>
      <h3>I am the signin form</h3>
      <button onClick={sendToUpdateUserSignIn}> SignIN</button>
    </div>
  );
};

export default SignInForm;
