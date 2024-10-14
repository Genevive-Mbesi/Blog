// src/components/Dashboard.js
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
