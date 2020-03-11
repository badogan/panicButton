import React from "react";
import "./App.css";
// import Counter from "./components/Counter";
// import AdBanner from "./components/AdBanner";
// import TimeOnPage from "./components/TimeOnPage";
// import UserList from "./components/UserList";
import MainPage from "./pages/MainPage";
import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <TimeOnPage />
      <Counter />
      <UserList/>
      <AdBanner /> */}
      <MainPage />
    </div>
  );
};

export default App;
