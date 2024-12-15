import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/loginandRegister.css';

function Login() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        mobileNumber,
        password,
        userType,
      });

      setError('');

      const { accessToken, userDetails } = response.data;
      if (rememberMe) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('userType', userType);
        localStorage.setItem('mobileNumber', userDetails.mobileNumber);
      } else {
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('userType', userType);
        sessionStorage.setItem('mobileNumber', userDetails.mobileNumber);
      }

      if (userType === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate(`/profile/${mobileNumber}`);
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="containerInside">
          <div className="login1">
            <div className="login-header">Login</div>
            <div class="login-container">
            <div className="login-input">
              <label className="login-text-label" htmlFor="mobileNumber">
                Mobile:</label>
            
              <input
                className="pass"
                type="tel"
                id="mobileNumber"
                placeholder="Enter Mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              </div>
            </div>
            <div class="login-container">
            <div className="login-input">
              <label className="login-text-label" htmlFor="password">
                Password:</label>
                
              <input
                className="pass"
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
</div>
<div class="login-container">
            <div className="login-input">
              <select
                className="user-type"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </select>
            </div>

            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
</div>
            <div className="login-button">
              <button className="login" onClick={handleLogin}>
                Login
              </button>
            </div>

            {error && <span className="invalid">{error}</span>}

            <hr />

            <span className="login-text">Don't have an account?</span>
            <Link to="/register">
              <button className="login">Register</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
