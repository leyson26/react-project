import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  // Function to handle changes in the username input field
  const handleUsernameChange = (e) => setUsername(e.target.value);

  // Function to handle changes in the password input field
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic authentication logic (replace with actual logic)
    if (username === 'example' && password === 'password') {
      setIsLoggedIn(true); // Set isLoggedIn state to true
      localStorage.setItem('token', 'yourAuthTokenHere'); // Store token in localStorage
    } else {
      setError('Invalid username or password'); // Set error state if authentication fails
    }
  };

  // Redirect to dashboard or home page if logged in
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={handleUsernameChange} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            required 
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
