const Income = require("../models/Income");

// Controller to get all incomes
exports.getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find();
    res.json(incomes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to create a new income
exports.createIncome = async (req, res) => {
    const { incomeName, incomeCategory, incomeAmount } = req.body;
    
    console.log('Received data:', { incomeName, incomeCategory, incomeAmount });
  
    try {
      const income = new Income({ incomeName, incomeCategory, incomeAmount });
      const savedIncome = await income.save();
      res.status(201).json(savedIncome);
    } catch (error) {
      console.error('Error saving income:', error.message);
      res.status(400).json({ message: 'Error creating income', error: error.message });
    }
  };
  

exports.updateIncome = async (req, res) => {
    try {
      const updatedIncome = await Income.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedIncome);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  
  exports.deleteIncome = async (req, res) => {
    try {
      await Income.findByIdAndDelete(req.params.id);
      res.json({ message: 'Income deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
