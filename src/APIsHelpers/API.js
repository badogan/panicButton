const URL_userSignup = "http://localhost:3003/signup";
const URL_userSignin = "http://localhost:3003/signin";
const URL_currentPanic = "http://localhost:3003/panic_current";
const URL_updatePanic = "http://localhost:3003/panic_update";

const postSimple = (url, obj) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(obj)
  });
};

const newUserSignUp = userSignupObject => {
  return postSimple(URL_userSignup, userSignupObject).then(response =>
    response.json()
  );
};

const UserSignIn = userSignInObject => {
  return postSimple(URL_userSignin, userSignInObject).then(response =>
    response.json()
  );
};

export default { newUserSignUp, UserSignIn };
