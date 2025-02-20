import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import google_icon from '../assets/google_icon.png';
import facebook_icon from '../assets/facebook_icon.png';
import bg from '../assets/kristin-dope-zkx29dCIzO0-unsplash.jpg';

import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';
import axios from 'axios';

const Signup = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fbSdkLoaded, setFbSdkLoaded] = useState(false);

  // Google Login
  const googleLogin = useGoogleLogin({
=======
  const login = useGoogleLogin({
>>>>>>> parent of 1a36418 (up)
    onSuccess: async (tokenResponse) => {
      console.log('Google Token:', tokenResponse);
      try {
<<<<<<< HEAD
        const res = await axios.post('http://127.0.0.1:8000/api/google-login', {
=======
        const res = await axios.post('api/google-login', {
>>>>>>> parent of 1a36418 (up)
          access_token: tokenResponse.access_token,
        });
        console.log('Backend Response:', res.data);
        localStorage.setItem('authToken', res.data.token);
        navigate('/dashboard');
      } catch (error) {
        console.error('Error during login:', error.response?.data || error.message);
      }
    },
    onError: () => console.log('Google Login Failed'),
  });

<<<<<<< HEAD
  // Load Facebook SDK
  useEffect(() => {
    if (!window.FB) {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "2500304330314427", // Replace with your App ID
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
      script.onload = () => console.log("Facebook SDK Loaded");
      document.body.appendChild(script);
    } else {
      setFbSdkLoaded(true);
    }
  }, []);

  // Facebook Login Handler
  const handleFacebookResponse = async (response) => {
    if (!fbSdkLoaded) {
      console.error("Facebook SDK not loaded yet");
      return;
    }

    console.log("Facebook Response:", response);
    if (response.accessToken) {
      try {
        const res = await axios.post('http://127.0.0.1:8000/api/facebook-login', {
          access_token: response.accessToken,
        });
        console.log('Backend Response:', res.data);
        localStorage.setItem('authToken', res.data.token);
        navigate('/dashboard');
      } catch (error) {
        console.error('Error during Facebook login:', error.response?.data || error.message);
      }
    } else {
      console.log("Facebook login failed.");
    }
  };
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
>>>>>>> parent of 1a36418 (up)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Signing up with:", { email, password });
    } else {
      console.log("Passwords do not match!");
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Image Wrapper */}
      <div 
        style={{
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
        //   backgroundImage: `url(${bg})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'blur(5px)', // Apply blur only to the background
          zIndex: -1, // Ensure the background is behind the content
        }}
      ></div>

      {/* Content */}
      <div className="container md-6">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h2 className="text-center mb-4">Signup</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
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
                <label htmlFor="password" className="form-label">Password:</label>
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
                <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Signup</button>
              <p className="text-center mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </p>

              <div className="text-center">
                {/* Google Login */}
                <img 
                  src={google_icon} 
                  alt="Google Login" 
                  style={{ width: '20px', cursor: 'pointer' }} 
                  onClick={() => googleLogin()} 
                />
                <p>or</p>
                {/* Facebook Login */}
                <FacebookLogin
                  appId="2500304330314427"
                  autoLoad={false}
                  callback={handleFacebookResponse}
                  render={renderProps => (
                    <img 
                      src={facebook_icon} 
                      alt="Facebook Login" 
                      style={{ width: '28px', cursor: 'pointer' }} 
                      onClick={renderProps.onClick} 
                    />
                  )}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
