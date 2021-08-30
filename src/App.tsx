import React from "react";

import "./App.css";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import LoginButton from "./Components/LoginButton";

function App() {
  return (
    <div className="App">
      <LoginButton />
    </div>
  );
}

export default App;
