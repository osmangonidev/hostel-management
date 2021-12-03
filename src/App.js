import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/hostel-management/order">
            <Order />
          </Route>
          <Route path="/hostel-management">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
