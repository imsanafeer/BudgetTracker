import React, { useState } from "react";
import "../styles/AddIncome.css";
import { Link } from "react-router-dom";
import { createIncome } from "../api";

const AddIncome = () => {
  const [incomeName, setIncomeName] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomeCategory, setIncomeCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting income:', { incomeName, incomeCategory, incomeAmount });
      await createIncome({ 
        incomeName, 
        incomeCategory, 
        incomeAmount: Number(incomeAmount) 
      });
      setIncomeName('');
      setIncomeAmount('');
      setIncomeCategory('');
      console.log('Income successfully created');
      alert('Income item created successfully!');
    } catch (error) {
      console.error('Error creating income:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="addincome-main">
      <div className="addincome-container">
        <div className="addincome-title">
          <h2>Incomes &gt; Add Incomes &gt;</h2>
        </div>
        <div className="viewincome-btn">
          <button>
            <Link to="/viewincome">View Incomes</Link>
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
              maxLength="10"
              value={incomeName}
              onChange={(e) => setIncomeName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              required
              maxLength="8"
              value={incomeAmount}
              onChange={(e) => setIncomeAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              required
              value={incomeCategory}
              onChange={(e) => setIncomeCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="Salary">Salary</option>
              <option value="Freelance">Freelance</option>
              <option value="Rental">Rental Income</option>
              <option value="Stocks">Stocks</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddIncome;
