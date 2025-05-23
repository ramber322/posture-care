import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/LoginPage.css'; 
import pclogo from './images/pclogo.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setError('');
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
      <img className = "posturecarelogo"
      src={pclogo} 
      alt="Login Logo" 
      />

<p className="posturecare-title">
  <span className="black">Posture</span>
  <span className="orange">Care</span>
</p>

        {error && <p className="error-message">{error}</p>}

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
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>

        <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
