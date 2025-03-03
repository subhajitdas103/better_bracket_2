import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../assets/soccer-players-action-professional-stadium.jpg";
import { Radio, RadioGroup } from 'rsuite';
import "rsuite/dist/rsuite.css";
import google_icon from "../assets/google_icon.png";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "@greatsumini/react-facebook-login";
import axios from "axios";
import facebook_icon from "../assets/facebook_icon.png";
// import "../styles/login.css"; 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; // Enable scrolling when unmounted
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "55px",
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ background: "rgba(255, 255, 255, 0.8)", padding: "30px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", width: "400px", height:"31rem" , marginTop:"-100px" }}>
        <h3 className="text-center mb-4">Sign in</h3>
        <div className="text-center">
          <img
            src={google_icon}
            alt="Google Login"
            style={{ width: "24px", cursor: "pointer" , marginTop:"-1px" , marginLeft:"5px" }}
            // onClick={() => googleLogin()}
          />
          
          <FacebookLogin
            appId="2500304330314427"
            autoLoad={false}
            // callback={handleFacebookResponse}
            render={(renderProps) => (
              <img
                src={facebook_icon}
                alt="Facebook Login"
                style={{ width: "30px", cursor: "pointer" , marginLeft:"15px" }}
                // onClick={renderProps.onClick}
              />
            )}
          />
        </div>
        <> <p style={{margin:"13px 102px"}}>or use your account</p></>
         
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-3">

            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
               placeholder="Password"
            />
          </div>
          <div className="mt-3 d-flex align-items-center justify-content-between" style={{ display: "flex", width: "100%" }}>
          <label>
          Remember me
          <input
            type="checkbox"
            className="rememberMeButton"
            value="remember-me" style={{marginLeft:"8px"}}
          />
        </label>
        <p style={{ margin: 0 }}>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </div>
        
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <div className="mt-3 d-flex align-items-center justify-content-between" style={{ display: "flex", width: "100%" }}>
          <p style={{ margin: 0 }}>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
         
        </div>




          
        
      </div>
    </div>
  );
};

export default Login;
