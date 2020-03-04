import { useEffect, useState } from "react";

const usePanic = () => {
  const [panic, setPanic] = useState({});
  const URL =
    "https://e5ucmo7jmf.execute-api.eu-west-2.amazonaws.com/default/nodeFunction1";

  const updatePanic = newPanicObject => {
    console.log(newPanicObject);
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPanicObject)
    })
      .then(response => response.json())
      .then(panic => {
        console.log(panic);
        setPanic(panic);
      });
  };

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(panic => setPanic(panic));
  }, []);

  return { panic, updatePanic };
};

export default usePanic;
