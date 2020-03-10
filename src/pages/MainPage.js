import React from "react";
import usePanic from "../hooks/usePanic";
import useUserSignup from "../hooks/useUserSignup";
import useUserSignin from "../hooks/useUserSignin";

const MainPage = () => {
  const { panic, updatePanic } = usePanic();
  const { userSignup, updateUserSignup } = useUserSignup();
  const { userSignin, updateUserSignin } = useUserSignin();

  //   Need to get this from a form or smth - static config for now
  const sendToUpdatePanic = () => {
    updatePanic({
      panic: {
        status: true,
        reason: "direct update from panic react app"
      }
    });
  };

  const sendToUpdateUserSignUp = () => {
    updateUserSignup({
      user: {
        username: "Basri",
        password: "password",
        password_confirmation: "password"
      }
    });
  };

  const sendToUpdateUserSignIn = () => {
    updateUserSignin({
        username: "Basri",
        password: "password"
    });
  };

  //   params.require(:user).permit(:username, :password, :password_confirmation)

  return (
    <div>
      {panic.status ? (
        <h1>Current panic status is TRUE </h1>
      ) : (
        <h2>Current panic status is FALSE</h2>
      )}
      <h2>Current panic reason is: {panic.reason}</h2>
      <br />
      <button onClick={sendToUpdatePanic}>Update Panic</button>
      <br />
      <h1>Sign Up Section:</h1>
      <br/>
      <button onClick={sendToUpdateUserSignUp}> Signup New User</button>
      <br />
      <h2>SignUp-Username: {userSignup.username} </h2>
      <br />
      <h2>Signup-Token: {userSignup.token}</h2>
      <br/>
      <h1>Sign IN Section:</h1>
      <br/>
      <button onClick={sendToUpdateUserSignIn}> SignIN New User</button>
      <br />
      <h2>SignIN-Username: {userSignin.username} </h2>
      <br />
      <h2>SignIN-Token: {userSignin.token}</h2>
    </div>
  );
};

export default MainPage;
