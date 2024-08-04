const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes"); 
require("dotenv").config();

const app = express();

// Connect to the database
connectDB();

// Middleware setup
app.use(cors());
app.use(express.json());

// Route setup
app.use("/api/incomes", incomeRoutes);
app.use("/api/expenses", expenseRoutes); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
