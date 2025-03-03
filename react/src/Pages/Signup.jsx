import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import google_icon from "../assets/google_icon.png";
import facebook_icon from "../assets/facebook_icon.png";
import bg from "../assets/soccer-players-action-professional-stadium.jpg";
import styled from 'styled-components';
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "@greatsumini/react-facebook-login";
import axios from "axios";
import { Radio, RadioGroup } from 'rsuite';
import "rsuite/dist/rsuite.css";
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fbSdkLoaded, setFbSdkLoaded] = useState(false);
  const RadioLabel = ({ children }) => <label style={{ padding: 7 }}>{children}</label>;
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

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "auto"; // Reset when component unmounts
  //   };
  // }, []);
  
  return (
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



    <div style={{ background: "rgba(255, 255, 255, 0.8)", padding: "30px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" , width:"400px" , height:"34rem" , marginTop:"-100px" }}>
        <h2 className="text-center mb-4">Signup</h2>
        <div className="mb-3">
          {/* <p>Choose account type</p> */}
            <StyledWrapper>
            <div id="firstFilter" className="filter-switch">
              <input defaultChecked id="option1" name="options" type="radio" />
              <label className="option" htmlFor="option1">Group User</label>
              <input id="option2" name="options" type="radio" />
              <label className="option" htmlFor="option2">Group Leader</label>
              <span className="background" />
            </div>
            </StyledWrapper>
          </div>
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
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm Password"
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
              style={{ width: "24px", cursor: "pointer" , marginTop:"-1px" , marginLeft:"5px" }}
              onClick={() => googleLogin()}
            />
            
            <FacebookLogin
              appId="2500304330314427"
              autoLoad={false}
              callback={handleFacebookResponse}
              render={(renderProps) => (
                <img
                  src={facebook_icon}
                  alt="Facebook Login"
                  style={{ width: "30px", cursor: "pointer" , marginLeft:"15px" }}
                  onClick={renderProps.onClick}
                />
              )}
            />
          </div>
      
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .filter-switch {
    border: 3px solid #86a9ff;
    border-radius: 30px;
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    width: 336px;
    overflow: hidden;
  }
  .filter-switch input {
    display: none;
  }
  .filter-switch label {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.5s;
    font-weight: 500;
    font-size: 18px;
  }
  .filter-switch .background {
    position: absolute;
    width: 49%;
    height: 38px;
    background-color:#0d6efd;
    top: 4px;
    left: 4px;
    border-radius: 30px;
    transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  #option2:checked ~ .background {
    left: 50%;
  }
  #option1:checked + label[for="option1"] {
    color:rgb(255, 255, 255);
    font-weight: bold;
  }
  #option2:checked + label[for="option2"] {
    color:rgb(255, 255, 255);
    font-weight: bold;
  }
  #option1:not(:checked) + label[for="option1"],
  #option2:not(:checked) + label[for="option2"] {
    color: #7d7d7d;
  }`;

export default Signup;
