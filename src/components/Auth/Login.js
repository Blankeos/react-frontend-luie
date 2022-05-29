import apiClient from "../../services/api";
import React, { useState } from "react";
import ReactSession from "react-client-session";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    apiClient.get("/sanctum/csrf-cookie").then(() => {
      apiClient
        .post("/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          //   console.log("Logged in Successfuly");
          // apiClient.get('/api/get-user')
          // .then(response => {
          //     // console.log(response)
          // })
        });
    });
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
