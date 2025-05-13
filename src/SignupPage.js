import React, { useState } from 'react';
import './LoginPage.css'; // reused login structure
import pclogo from './pclogo.png';
import { Link } from 'react-router-dom';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    console.log('Signing up with:', { name, email, password });
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        
      <p className="register-title">
      Register
      </p>

        {error && <p className="error-message">{error}</p>}

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>

        <p className="signup-link" >
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
