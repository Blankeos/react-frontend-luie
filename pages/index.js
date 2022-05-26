import axios from "axios";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import credChecker from "../services/isLoggedIn";

function Home() {
  const handleLogout = e => {
    apiClient.post('/logout')
    .then(response => {
        console.log(response)
        credChecker.setIsLoggedIn(false)
    })
  }

  return (
    <main>
      <Login />
      <hr />
      <form action="" onSubmit={handleLogout}>
        <button type="submit">Logout</button>
      </form>
    </main>
  )
}

export default Home;
