import React, { useState } from "react";
import "./ATM.css";

const ATM = ({ user, onLogout }) => {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [message, setMessage] = useState(""); 
  const [showHistory, setShowHistory] = useState(false); // ✅ Toggle history

  const handleDeposit = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setMessage("⚠️ Enter a valid amount");
      return;
    }
    const newBalance = balance + parseInt(amount);
    setBalance(newBalance);
    setTransactions([...transactions, `Deposited ₹${amount}`]);
    setMessage(`✅ Deposit of ₹${amount} successful!`);
    setAmount("");
  };

  const handleWithdraw = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setMessage("⚠️ Enter a valid amount");
      return;
    }
    if (parseInt(amount) > balance) {
      setMessage("❌ Insufficient balance");
      return;
    }
    const newBalance = balance - parseInt(amount);
    setBalance(newBalance);
    setTransactions([...transactions, `Withdrew ₹${amount}`]);
    setMessage(`💸 Withdrawal of ₹${amount} successful!`);
    setAmount("");
  };

  const handleQuickWithdraw = (amt) => {
    if (amt > balance) {
      setMessage("❌ Insufficient balance");
      return;
    }
    const newBalance = balance - amt;
    setBalance(newBalance);
    setTransactions([...transactions, `Withdrew ₹${amt}`]);
    setMessage(`💸 Quick Withdraw of ₹${amt} successful!`);
  };

  const handleShowBalance = () => {
    setMessage(`📊 Current Balance: ₹${balance}`);
  };

  return (
    <div className="atm-container">
      <h2>Welcome, {user} 👋</h2>

      <div className="balance-box">
        <p className="balance-text">Balance:</p>
        <p className="balance-amount">₹{balance}</p>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* ✅ Message Display */}
      {message && <p className="message-box">{message}</p>}

      <div className="button-grid">
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
        <button onClick={() => handleQuickWithdraw(100)}>₹100 Withdraw</button>
        <button onClick={() => handleQuickWithdraw(200)}>₹200 Withdraw</button>
        <button onClick={() => handleQuickWithdraw(500)}>₹500 Withdraw</button>
        <button onClick={handleShowBalance}>Show Balance</button>
        <button onClick={() => setShowHistory(!showHistory)}>
          {showHistory ? "Hide History" : "Transaction History"}
        </button>
        <button onClick={onLogout}>Logout</button>
      </div>

      {/* ✅ Scrollable Transaction History */}
      {showHistory && (
        <div className="history-box">
          <h3>Transaction History</h3>
          <div className="history-list">
            {transactions.length === 0 ? (
              <p>No transactions yet.</p>
            ) : (
              <ul>
                {[...transactions].reverse().map((t, index) => (
                  <li key={index}>{t}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ATM;
