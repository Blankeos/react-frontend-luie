import axios from "axios";
import Login from "../src/components/Auth/Login";
import SignUp from "../src/components/Auth/SignUp";
import { useState, useEffect } from "react";
import apiClient from "../src/services/api";
import Logout from "../src/components/Auth/Logout";

function Home(prop) {
  const [user, setUser] = useState([]);

  // console.log(user)

  const userData = user.map((data) => (
    <li key={data.id}>
      {data.email} + {data.name}
    </li>
  ));

  return (
    <main>
      {user.length === 0 ? (
        <Login />
      ) : (
        <>
          <Logout />
          <ul>{userData}</ul>
        </>
      )}
      <hr />
      <SignUp />
      <hr />
      <Logout />
    </main>
  );
}

export default Home;
