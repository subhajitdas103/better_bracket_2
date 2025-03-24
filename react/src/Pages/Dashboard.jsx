import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/sidebar";
const Dashboard = () => {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center mb-4">Welcome to Dashboard</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
