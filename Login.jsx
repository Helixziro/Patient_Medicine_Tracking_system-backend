import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && pass === '123456') {
      setMsg('Login successful');
    } else {
      setMsg('Invalid credentials');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
        <p>{msg}</p>
      </form>
    </div>
  );
};

export default Login;
