import React, { useEffect, useState } from "react";
import "../styles/ViewIncome.css";
import { Link } from "react-router-dom";
import { deleteIncome, getIncomes } from "../api"; 

const trashicon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 448 512">
    <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
  </svg>
);

const ViewIncome = () => {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const response = await getIncomes();
        setIncomes(response.data);
      } catch (error) {
        console.error('Error fetching incomes:', error);
      }
    };

    fetchIncomes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteIncome(id);
      setIncomes(incomes.filter((income) => income._id !== id));
    } catch (error) {
      console.error("Error deleting income", error);
    }
  };

  return (
    <div className="viewincome-main">
      <div className="viewincome-container">
        <div className="viewincome-title">
          <h2>Incomes &gt; View Incomes &gt;</h2>
        </div>
        <div className="addincome-btn">
          <button>
            <Link to="/addincome">Add Income</Link>
          </button>
        </div>
      </div>
      <div className="viewincome-content">
        {incomes.length > 0 ? (
          incomes.map((income) => (
            <div key={income._id} className="income-list">
              <h3>{income.incomeName}</h3>
              <h3>{income.incomeCategory}</h3>
              <h3>{income.incomeAmount}</h3>
              <div className="income-actions">
                <h3 onClick={() => handleDelete(income._id)}>{trashicon}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>No income records available.</p>
        )}
      </div>
    </div>
  );
};

export default ViewIncome;
