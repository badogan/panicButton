import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const up = () => setCount(count=>count + 1);
  const down = () => setCount(count=>count - 1);
  return { count, up, down };
};

export default useCounter;