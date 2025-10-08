import React, { useState } from "react";

const Login = ({ setShowRegister, setUser }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      setUser(username);
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don’t have an account?{" "}
        <span className="link" onClick={() => setShowRegister(true)}>
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
