import React from "react";
import Sidebar from "../Components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <h2 className="text-center mb-4">Welcome to Dashboard</h2>
      </div>
    </div>
  );
};

export default Dashboard;
