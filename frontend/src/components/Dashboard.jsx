import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import { getExpenses, getIncomes } from "../api";

const categories = [
  "Household Bills",
  "Finance & Insurance",
  "Travel",
  "Food",
  "Other"
];

const Dashboard = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [expenseBreakdown, setExpenseBreakdown] = useState(
    categories.reduce((acc, category) => {
      acc[category] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const incomeResponse = await getIncomes();
        const expenseResponse = await getExpenses();

        const totalIncome = incomeResponse.data.reduce((sum, income) => sum + income.incomeAmount, 0);
        setTotalIncome(totalIncome);

        const expenses = expenseResponse.data;
        const totalExpenses = expenses.reduce((sum, expense) => sum + expense.expenseAmount, 0);
        setTotalExpenses(totalExpenses);

        const breakdown = expenses.reduce((acc, expense) => {
          const category = expense.expenseCategory;
          if (acc[category] !== undefined) {
            acc[category] += expense.expenseAmount;
          }
          return acc;
        }, { ...expenseBreakdown });

        setExpenseBreakdown(breakdown);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const spareCash = totalIncome - totalExpenses;

  const getSpareCashClass = () => {
    if (spareCash > 0) return "summary-item spare-cash";
    if (spareCash < 0) return "summary-item spare-cashred";
    return "summary-item spare-cash";
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-title">
        <h2>Dashboard &gt;</h2>
      </div>
      <div className="dashboard-sub">
        <div className="summary">
          <h1>Summary</h1>
          <div className="summary-item income-summary">
            <h2>Income</h2> <h3>$ {totalIncome.toFixed(2)}</h3>
          </div>
          <div className="summary-item spending-summary">
            <h2>Spending</h2> <h3>$ {totalExpenses.toFixed(2)}</h3>
          </div>
          <div className={getSpareCashClass()}>
            <h2>Spare Cash</h2> <h3>$ {spareCash.toFixed(2)}</h3>
          </div>
          <div>
            {spareCash > 0 ? (
              <p className="positive-budget">Your budget is looking good.</p>
            ) : spareCash < 0 ? (
              <p className="negative-budget">At the moment it looks like you’ve got more going out than coming in.</p>
            ) : (
              <p className="neutral-budget">No entries</p>
            )}
          </div>
        </div>
        <div className="spending-breakdown">
          <h1>Spending Breakdown</h1>
          {categories.map(category => (
            <div key={category} className="spending-stat">
              <h2>{category}</h2> <h3>$ {expenseBreakdown[category].toFixed(2)}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
