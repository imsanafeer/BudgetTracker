import "./App.css";
import AddExpense from "./components/AddExpense";
import AddIncome from "./components/AddIncome";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ViewExpense from "./components/ViewExpense";
import ViewIncome from "./components/ViewIncome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/addincome" element={<AddIncome/>}></Route>
          <Route path="/viewincome" element={<ViewIncome/>}></Route>
          <Route path="/addexpense" element={<AddExpense/>}></Route>
          <Route path="/viewexpense" element={<ViewExpense/>}></Route>
        </Routes>
        
    </div>
    </BrowserRouter>

  );
}

export default App;
