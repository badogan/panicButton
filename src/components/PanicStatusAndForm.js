import React, { useState } from "react";
import usePanic from "../hooks/usePanic";

const PanicStatusAndForm = () => {
  const { panic, updatePanic } = usePanic();
  const [reasonInputField, setReasonInputField] = useState([]);

  const togglePanicAndUpdateReason = () => {
    updatePanic({
      panic: {
        status: !panic.status,
        reason: reasonInputField
      }
    });
  };

  const updatePanicReason = () => {
    updatePanic({
      panic: {
        status: panic.status,
        reason: reasonInputField
      }
    });
  };

  const handleReason = e => {
    setReasonInputField(e.target.value);
  };

  return (
    <div className="panic-container wrapper">
      <br /> <br />
      {panic.status ? <h1>YES PANIC ! </h1> : <h2>No Panic :)</h2>}
      <h2>Current status reason:</h2>
      <h2> {panic.reason}</h2>
      <br />
      <form id="form44">
        {/* <label>Username: </label> */}
        <input
          onChange={handleReason}
          type="text"
          placeholder={panic.reason}
          name="reason"
        ></input>
        <br />
      </form>
      <br />
      <div className="panic-buttons-div">
        <button
          className="toggle-panic-button"
          onClick={() => togglePanicAndUpdateReason()}
        >
          Toggle Panic State
        </button>
        <button
          className="update-panic-reason-button"
          onClick={() => updatePanicReason()}
        >
          Update Reason
        </button>
      </div>
      <br />
    </div>
  );
};

export default PanicStatusAndForm;
