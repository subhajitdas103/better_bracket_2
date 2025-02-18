import React, { useState } from "react";
import { Link } from "react-router-dom";
import google_icon from '../assets/google_icon.png';
import facebook_icon from '../assets/facebook_icon.png';
import bg from '../assets/kristin-dope-zkx29dCIzO0-unsplash.jpg';

import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Google Token:', tokenResponse);

      try {
        const res = await axios.post('api/google-login', {
          access_token: tokenResponse.access_token,
        });

        console.log('Backend Response:', res.data);

        // Store token in localStorage or state
        localStorage.setItem('authToken', res.data.token);

        // Redirect user to dashboard
        navigate('/dashboard');
      } catch (error) {
        console.error('Error during login:', error.response?.data || error.message);
      }
    },
    onError: () => console.log('Login Failed'),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

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
              <p style={{ marginLeft: '61px', marginTop: '14px' }}>
                Already have an account? <Link to="/login">Login</Link>
              </p>

              <div>
                <img 
                  src={google_icon} 
                  alt="Google Login" 
                  style={{ width: '20px', marginLeft: '200px', marginBottom: '-8px', cursor: 'pointer' }} 
                  onClick={() => login()} 
                />
                <p style={{ margin: '-20px 10px 0px 175px', marginLeft: '175px' }}>or</p>
                <img 
                  src={facebook_icon} 
                  alt="Facebook Login" 
                  style={{ width: '28px', marginLeft: '140px', marginTop: '-50px', cursor: 'pointer' }} 
                  onClick={() => login()} 
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
