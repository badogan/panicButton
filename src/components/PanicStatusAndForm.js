import React from "react";
import usePanic from "../hooks/usePanic";

const PanicStatusAndForm = () => {
  const { panic, updatePanic } = usePanic();

  const sendToUpdatePanic = () => {
    updatePanic({
      panic: {
        status: true,
        reason: "some update"
      }
    });
  };
  return (
    <div>
      <h3>I am inside PaanicStatusAndForm</h3>
      {panic.status ? (
        <h1>Current panic status is TRUE </h1>
      ) : (
        <h2>Current panic status is FALSE</h2>
      )}
      <h2>Current panic reason is: {panic.reason}</h2>
      <br />
      <button onClick={sendToUpdatePanic}>Update Panic</button>
      <br />
    </div>
  );
};

export default PanicStatusAndForm;
