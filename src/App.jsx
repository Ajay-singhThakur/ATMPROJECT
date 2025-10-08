import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import ATM from "./components/ATM";

const App = () => {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="app-container">
      {!user ? (
        showRegister ? (
          <Register setShowRegister={setShowRegister} setUser={setUser} />
        ) : (
          <Login setShowRegister={setShowRegister} setUser={setUser} />
        )
      ) : (
        <ATM user={user} setUser={setUser} />
      )}
    </div>
  );
};

export default App;
