const URL_userSignup = "http://localhost:3003/signup";
const URL_userSignin = "http://localhost:3003/signin";

const newUserSignUp = userSignupObject => {
  return fetch(URL_userSignup, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userSignupObject)
  }).then(response => response.json());
};

const UserSignIn = userSignInObject => {
  return fetch(URL_userSignin, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userSignInObject)
  }).then(response => response.json());
};

export default { newUserSignUp, UserSignIn };