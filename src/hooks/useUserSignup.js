import { useState } from "react";
import API from "../APIsHelpers/API";

const useUserSignup = () => {
  const [userSignup, setUserSignup] = useState({});
  const updateUserSignup = userSignupObject =>
    API.newUserSignUp(userSignupObject).then(newUser => {
      setUserSignup(newUser)
    });
  return { userSignup, updateUserSignup };
};

export default useUserSignup;
