import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "20px", width: "100%" }}>
        <h2>Welcome to Dashboard</h2>
      </div>
    </div>
  );
};

export default Dashboard;
