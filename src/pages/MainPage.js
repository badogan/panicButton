import React from "react";
import useUserSignin from "../hooks/useUserSignin";
import SignInForm from '../components/SignInForm'
import PanicStatusAndForm from '../components/PanicStatusAndForm'

const MainPage = () => {

  const { userSignin, updateUserSignin } = useUserSignin();

  return (
    <div>
      <SignInForm updateUserSignin={updateUserSignin}/>
      {userSignin.username ? <h5>Welcome {userSignin.username} !</h5> :null}
      {/* <h5>SignedIn User - token: {userSignin.token}</h5> */}
      {/* <h5>SignedIn User - id: {userSignin.userid}</h5> */}
      {userSignin.token ? <PanicStatusAndForm /> :null}
    </div>
  );
};

export default MainPage;
