import axios from "axios";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import { useState, useEffect } from "react";
import apiClient from "../services/api";
import Logout from "../components/Auth/Logout";

function Home(prop) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    apiClient.get('/sanctum/csrf-cookie')
    .then(() => {
        apiClient.get('/api/get-user')
        .then(response => {
            setUser(response.data)
        })
        .catch(e => {
          console.log("Please login")
        })
    })
  }, [])

  // console.log(user)

  const userData = user.map((data) =>
      <li key={data.id}>{data.email} + {data.name}</li>
  )

  return (
    <main>
      {
        user.length === 0
        ? <Login />
        : <>
          <Logout />
          <ul>
            {userData}
          </ul>
        </>

      }
    </main>
  )
}

export default Home;
