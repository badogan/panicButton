import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {

  const { count, up, down } = useCounter();

  return (
    <div className="App">
      <h4> A simple counter</h4>
      <h3>{count}</h3>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
    </div>
  );
};

export default Counter;
