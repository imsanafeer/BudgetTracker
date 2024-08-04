const Expense = require("../models/Expense");

// Controller to get all expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to create a new expense
exports.createExpense = async (req, res) => {
  const { expenseName, expenseCategory, expenseAmount } = req.body;

  console.log('Received data:', { expenseName, expenseCategory, expenseAmount });

  if (!expenseName || !expenseCategory || expenseAmount === undefined) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const expense = new Expense({ expenseName, expenseCategory, expenseAmount });
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    console.error('Error saving expense:', error.message);
    res.status(400).json({ message: 'Error creating expense', error: error.message });
  }
};

// Controller to update an expense
exports.updateExpense = async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    
    res.json(updatedExpense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    
    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ message: 'Expense deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
