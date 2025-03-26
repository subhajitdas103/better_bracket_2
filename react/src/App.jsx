import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Sidebar";
import logo from "./assets/nn.png";

// Layout Wrapper for Pages with Sidebar
const DashboardLayout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 p-4">{children}</div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Better Bracket" width="100" height="100" style={{ marginTop: "-33px" }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto" style={{ marginTop: "-33px" }}>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect default route */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Dashboard with Sidebar */}
            <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
