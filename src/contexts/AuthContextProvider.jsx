import React, { useContext, createContext, useState, useEffect } from "react";
import apiClient from "../services/api";

const defaultState = {
  username: "",
  email: "",
  profileImage: "",
};

const AuthContext = createContext(defaultState);
export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const initialState = {
    username: "carlotaleon",
    email: "carlotaleonct@gmail.com",
    profileImage: "imgurl",
  };

  const [user, setUser] = useState(initialState);

  // useEffect(() => {
  //   apiClient.get("/sanctum/csrf-cookie").then(() => {
  //     apiClient
  //       .get("/api/get-user")
  //       .then((response) => {
  //         setUser(response.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //         console.log("Please login");
  //       });
  //   });
  // }, []);

  // Functions for changing state
  function changeUsername(value) {
    setUser((prev) => ({
      ...prev,
      username: value,
    }));
  }
  const value = {
    user,
    changeUsername,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
