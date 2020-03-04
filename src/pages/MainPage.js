import React from "react";
import usePanic from "../hooks/usePanic";

const MainPage = () => {
  const { panic, updatePanic } = usePanic();

//   Need to get this from a form or smth - static config for now
  const sendToUpdatePanic = () => {
    updatePanic({
      status: true,
      reason: "something wrong somewhere. stopped now!"
    });
  };

  return (
    <div>
      {panic.status ? <h1>Current panic status is TRUE </h1> : <h2>Current panic status is FALSE</h2>}
      <h2>Current panic reason is: {panic.reason}</h2>
      <br />
      <button onClick={sendToUpdatePanic}>Update Panic</button>
    </div>
  );
};

export default MainPage;
