import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import '../styles/loginandRegister.css';

function Register() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('customer');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3000/register', {
                mobileNumber,
                name,
                email,
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
            setError(error.response?.data?.message || 'An error occurred during registration.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="register1">
                    <h2 className="register-header">Register</h2>
                    {error && <p className="invalid">{error}</p>}
                    <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                        {/* <div className="register-input-container"> */}
                            <div className="register-input">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="register-input">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="register-input">
                                <label htmlFor="mobileNumber">Mobile Number</label>
                                <input
                                    type="text"
                                    id="mobileNumber"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="register-input">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="register-input">
                                <label htmlFor="userType">User Type</label>
                                <select
                                    id="userType"
                                    value={userType}
                                    onChange={(e) => setUserType(e.target.value)}
                                    className="user-type"
                                >
                                    <option value="customer">Customer</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                        {/* </div> */}
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label>Remember Me</label>
                        </div>
                        <div className="register-button">
                            <button type="submit">Register</button>
                        </div>
                    </form>
                    <hr />
                    <p className="register-text">
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;
