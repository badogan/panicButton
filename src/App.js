import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import AdBanner from "./components/AdBanner";
import TimeOnPage from "./components/TimeOnPage";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div>
      <TimeOnPage />
      <Counter />
      <UserList/>
      <AdBanner />
    </div>
  );
};

export default App;
