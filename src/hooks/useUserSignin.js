import { useState } from "react";
import API from "../APIsHelpers/API";

const useUserSignin = () => {
  const [userSignin, setUserSignin] = useState({});
  const updateUserSignin = userSigninObject =>
    API.UserSignIn(userSigninObject).then(loggedinUser => {
      setUserSignin(loggedinUser);
    });
  return { userSignin, updateUserSignin };
};

export default useUserSignin;
