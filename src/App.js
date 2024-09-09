import React, { useState } from 'react';
// import { MdEdit } from "react-icons/md";
// import { TiDelete } from "react-icons/ti";
import './App.css';


function App() {
  const [walletBalance, setWalletBalance] = useState(4500);
  const [expenses, setExpenses] = useState(500);
  const [transactions, setTransactions] = useState([
    { name: 'Samosa', amount: 150, date: 'March 20, 2024' },
    { name: 'Movie', amount: 300, date: 'March 21, 2024' },
    { name: 'Auto', amount: 50, date: 'March 22, 2024' },
  ]);
  // eslint-disable-next-line no-unused-vars
  const [topExpenses, setTopExpenses] = useState([
    { category: 'Entertainment', amount: 3150 },
    { category: 'Food', amount: 1350 },
    { category: 'Travel', amount: 500 },
  ]);

  const addIncome = (amount) => {
    setWalletBalance(walletBalance + amount);
  };

  const addExpense = (amount) => {
    setExpenses(expenses + amount);
  };

  const deleteTransaction = (index) => {
    const newTransactions = [...transactions];
    newTransactions.splice(index, 1);
    setTransactions(newTransactions);
  };

  return (
    <div className="app">
      <div className="container">
      <div className="header">
          <div className="title">Expense Tracker</div>
        </div>
       
        <div className="content">
          <div className="balance">
            <div className="balance-title">Wallet Balance:</div>
            <div className="balance-amount">₹{walletBalance}</div>
            <button className="button1" onClick={() => addIncome(0)}>+ Add Income</button>
          </div>
          <div className="expenses">
            <div className="expenses-title">Expenses:</div>
            <div className="expenses-amount">₹{expenses}</div>
            <button className="button2" onClick={() => addExpense(0)}>+ Add Expense</button>
          </div>
          
        </div>

        <div className="sections">
          <div className="section transactions">
            <div className="section-title">Recent Transactions</div>
            <div className="transactions-list">
              {transactions.map((transaction, index) => (
                <div key={index} className="transaction">
                  <div className="transaction-icon">
                    <img src={`${transaction.name.toLowerCase()}.svg`} alt={transaction.name} />
                  </div>
                  <div className="transaction-details">
                    <div className="transaction-name">{transaction.name}</div>
                    <div className="transaction-date">{transaction.date}</div>
                  </div>
                  <div className="transaction-amount">₹{transaction.amount}</div>
                  <div className="transaction-actions">
                    <button onClick={() => deleteTransaction(index)}>
                     <img src="../assetes/delete.jpg"alt ="Delete"/>
                      
                    </button>
                    <button>
                     {/* <img src={ MdEdit } alt ="Edit"/> */}
                     <img src="../assetes/edit.jpg"alt ="Delete"/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="section expenses">
          <div className="section-title">Top Expenses</div>
            <div className="chart-container">
              <div className="chart">
                <div className="chart-label">Food</div>
                <div className="chart-bar" style={{ width: `${(topExpenses[1].amount / (topExpenses[0].amount + topExpenses[1].amount + topExpenses[2].amount)) * 100}%` }}></div>
              </div>
              <div className="chart">
                <div className="chart-label">Entertainment</div>
                <div className="chart-bar" style={{ width: `${(topExpenses[0].amount / (topExpenses[0].amount + topExpenses[1].amount + topExpenses[2].amount)) * 100}%` }}></div>
              </div>
              <div className="chart">
                <div className="chart-label">Travel</div>
                <div className="chart-bar" style={{ width: `${(topExpenses[2].amount / (topExpenses[0].amount + topExpenses[1].amount + topExpenses[2].amount)) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
