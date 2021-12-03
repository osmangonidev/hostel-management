import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";

export default function Login() {
  const passwords = ["osman", "rifat", "rubayet"];
  const [path, setPath] = useState("/");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    //cheack roll and password
    if (passwords.includes(password)) {
      window.location.replace("/order");
    }
  };
  return (
    <div>
      <h1>Welcome to MIST Online Hostel Portal</h1>
      <form>
        <h4>Login</h4>
        <div className="input-container">
          <label>Roll </label>
          <input type="text"></input>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input onChange={handleInput} type="password"></input>
        </div>
        <button className="button" onClick={handleLogin}>
          login
        </button>
      </form>
    </div>
  );
}
