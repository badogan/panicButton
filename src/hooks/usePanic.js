import { useEffect, useState } from "react";

const usePanic = () => {
  const [panic, setPanic] = useState({});
  const URL_to_GET ="https://e5ucmo7jmf.execute-api.eu-west-2.amazonaws.com/default/nodeFunction1";
  const URL_to_POST='https://fullstack-test-backend-basri.herokuapp.com/panic_update'

  const updatePanic = newPanicObject => {
    console.log(newPanicObject);
    fetch(URL_to_POST, {
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
    fetch(URL_to_GET)
      .then(response => response.json())
      .then(panic => setPanic(panic));
  }, []);

  return { panic, updatePanic };
};

export default usePanic;
