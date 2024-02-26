import React, { useState } from 'react';

function Signup() {
  // State variables to store form data
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  // Handler functions to update form data
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Inline CSS styles
  const inputStyle = {
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '300px',
    fontSize: '16px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer'
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Sign Up</h2>
      <div>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={handleFullNameChange}
          style={inputStyle}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={inputStyle}
        />
      </div>
      <div>
        <button style={buttonStyle}>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
