import React, { useState } from "react";
import "../styles/AddIncome.css";
import { Link } from "react-router-dom";
import { createExpense } from "../api";


const AddExpense = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting expense:', { expenseName, expenseCategory, expenseAmount });
      await createExpense({ 
        expenseName, 
        expenseCategory, 
        expenseAmount: Number(expenseAmount) 
      });
      setExpenseName('');
      setExpenseAmount('');
      setExpenseCategory('');
      console.log('Expense successfully created');
      alert('Expense item created successfully!');
    } catch (error) {
      console.error('Error creating expense:', error.response ? error.response.data : error.message);
    }
  };
  
  

  

  return (
    <div className="addincome-main">
      <div className="addincome-container">
        <div className="addincome-title">
          <h2>Expenses &gt; Add Expenses &gt;</h2>
        </div>
        <div className="viewincome-btn">
          <button>
            <Link to="/viewexpense">View Expenses</Link>
          </button>
        </div>
      </div>

      <div className="form-container">
        <form id="add-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              required
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              required
              value={expenseCategory}
              onChange={(e) => setExpenseCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="Household Bills">Household Bills</option>
              <option value="Finance & Insurance">Finance & Insurance</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
