import React from "react";
import AppNavbar from "./components/AppNavbar";
import HomePage from "./components/HomePage";
import DashBoard from "./components/DashBoard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/dashboard' component={DashBoard} />
      </Switch>
    </Router>
  );
}

export default App;
