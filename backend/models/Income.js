const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
  incomeName: {
    type: String,
    required: true
  },
  incomeAmount: {
    type: Number,
    required: true
  },
  incomeCategory: {
    type: String,
    required: true
  }
});

const Income = mongoose.model('Income', IncomeSchema);

module.exports = Income;

