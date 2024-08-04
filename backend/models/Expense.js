const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  expenseName: {
    type: String,
    required: true
  },
  expenseAmount: {
    type: Number,
    required: true
  },
  expenseCategory: {
    type: String,
    required: true
  }
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;
