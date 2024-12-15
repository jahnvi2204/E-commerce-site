import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import '../styles/loginandRegister.css';

function Login() {
  const [mobileNumber, setMobileNumber] = useState(''); // Changed to mobileNumber
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer'); // Default user type
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        mobileNumber, // Use mobileNumber here
        password,
        userType,
      });

      setError('');

      // Save token and user details in localStorage/sessionStorage
      const { accessToken, userDetails } = response.data;
      if (rememberMe) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('userType', userType);
        localStorage.setItem('mobileNumber', userDetails.mobileNumber); // Change to mobileNumber
      } else {
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('userType', userType);
        sessionStorage.setItem('mobileNumber', userDetails.mobileNumber); // Change to mobileNumber
      }

      // Redirect based on user type
      if (userType === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate(`/profile/${mobileNumber}`); // Change to mobileNumber
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

          <div className="login-input">
            <input
              className="pass"
              type="tel" // Changed input type to tel
              placeholder="Enter Mobile number"
              value={mobileNumber} // Use mobileNumber here
              onChange={(e) => setMobileNumber(e.target.value)} // Set mobileNumber
            />
          </div>

          <div className="login-input">
            <input
              className="pass"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

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
      <Footer/>
    </>
  );
}

export default Login;
