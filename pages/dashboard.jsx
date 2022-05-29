import React, { useContext } from "react";
import { useAuthContext } from "../src/contexts/AuthContextProvider";

const Dashboard = () => {
  const { user, changeUsername } = useAuthContext();

  return (
    <>
      <div>Dashboard</div>
      <div>{JSON.stringify(user)}</div>

      <button
        onClick={() => {
          changeUsername("Luiejohn");
        }}
      >
        Change Username
      </button>
    </>
  );
};

export default Dashboard;
