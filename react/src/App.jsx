import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate, Outlet } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Sidebar/Sidebar";
import logo from "./assets/nn.png";

// ✅ Dashboard Layout (Ensures Sidebar renders only ONCE)
const DashboardLayout = () => (
  <div className="flex">
    <Sidebar /> {/* Sidebar appears only once here */}
    <div className="flex-1 p-4">
      <Outlet /> {/* This will render the child routes dynamically */}
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        

        {/* Routes */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect default route */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* ✅ Fixed Dashboard Layout Route */}
            <Route path="/dashboard">
              <Route index element={<Dashboard />} /> {/* Default dashboard page */}
              {/* Add more routes inside dashboard if needed */}
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
