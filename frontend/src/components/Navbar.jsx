import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container">
      <h1><a href="/">BudgetTracker</a></h1>
      <div className="nav-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`nav-list ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Dashboard</Link>
          </li>
          <li>
            <Link to="/viewincome" onClick={toggleMenu}>Incomes</Link>
          </li>
          <li>
            <Link to="/viewexpense" onClick={toggleMenu}>Expenses</Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
