import { useEffect, useState } from "react";
import API from "../APIsHelpers/API";

const usePanic = () => {
  const [panic, setPanic] = useState({});

  const updatePanic = newPanicObject => {
    API.postNewPanicStatus(newPanicObject)
      .then(response => response.json())
      .then(panic => setPanic(panic));
  };

  useEffect(() => {
    API.getCurrentPanicStatus()
      .then(resp => resp.json())
      .then(panic => setPanic(panic));
  }, []);

  return { panic, updatePanic };
};

export default usePanic;
