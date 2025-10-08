import React, { useState } from "react";

const Register = ({ setShowRegister, setUser }) => {
  const [username, setUsername] = useState("");

  const handleRegister = () => {
    if (username.trim()) {
      setUser(username);
    }
  };

  return (
    <div className="card">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Choose a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account?{" "}
        <span className="link" onClick={() => setShowRegister(false)}>
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
