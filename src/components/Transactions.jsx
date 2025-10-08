import React from "react";

const Transactions = ({ transactions }) => {
  return (
    <div className="txn-box">
      <h3>Transaction History</h3>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul>
          {transactions.map((txn, index) => (
            <li key={index}>
              <strong>{txn.type}</strong>: ₹{txn.amount} | Balance: ₹{txn.balance}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Transactions;
