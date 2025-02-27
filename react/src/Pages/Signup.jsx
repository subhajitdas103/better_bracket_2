import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import google_icon from "../assets/google_icon.png";
import facebook_icon from "../assets/facebook_icon.png";
import bg from "../assets/soccer-players-action-professional-stadium.jpg";

import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "@greatsumini/react-facebook-login";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fbSdkLoaded, setFbSdkLoaded] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post("http://127.0.0.1:8000/api/google-login", {
          access_token: tokenResponse.access_token,
        });
        localStorage.setItem("authToken", res.data.token);
        navigate("/dashboard");
      } catch (error) {
        console.error("Error during login:", error.response?.data || error.message);
      }
    },
    onError: () => console.log("Google Login Failed"),
  });

  useEffect(() => {
    if (!window.FB) {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "2500304330314427",
          cookie: true,
          xfbml: true,
          version: "v18.0",
        });
        setFbSdkLoaded(true);
      };
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      setFbSdkLoaded(true);
    }
  }, []);

  const handleFacebookResponse = async (response) => {
    if (!fbSdkLoaded) return;
    if (response.accessToken) {
      try {
        const res = await axios.post("http://127.0.0.1:8000/api/facebook-login", {
          access_token: response.accessToken,
        });
        localStorage.setItem("authToken", res.data.token);
        navigate("/dashboard");
      } catch (error) {
        console.error("Error during Facebook login:", error.response?.data || error.message);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Signing up with:", { email, password });
    } else {
      console.log("Passwords do not match!");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Reset when component unmounts
    };
  }, []);
  
  return (
    // <div
    //   style={{
    //     position: "relative",
    //     height: "100vh",
    //     backgroundImage: `url(${bg})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >

<div
  style={{
    position: "absolute",
    top: 0,
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
   marginTop:"55px",
  }}
>



      <div style={{ background: "rgba(255, 255, 255, 0.8)", padding: "30px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" , width:"400px" , height:"31rem" , marginTop:"-100px" }}>
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <div className="text-center">
            <img
              src={google_icon}
              alt="Google Login"
              style={{ width: "20px", cursor: "pointer" }}
              onClick={() => googleLogin()}
            />
            <p>or</p>
            <FacebookLogin
              appId="2500304330314427"
              autoLoad={false}
              callback={handleFacebookResponse}
              render={(renderProps) => (
                <img
                  src={facebook_icon}
                  alt="Facebook Login"
                  style={{ width: "28px", cursor: "pointer" }}
                  onClick={renderProps.onClick}
                />
              )}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
