import React from "react";

const WelcomeAndSignoutForm = (props) => {
  return (
    <React.Fragment>
      <h3>Welcome {props.username} !</h3>
      <br />
      <button onClick={()=>props.userSignout()}>Click to Signout!</button>
      <br />
    </React.Fragment>
  );
};

export default WelcomeAndSignoutForm;
