const express = require("express");
const { getIncomes, createIncome, updateIncome, deleteIncome } = require("../controllers/incomeController");
const router = express.Router();

router.get("/", getIncomes);
router.post("/", createIncome);
router.put('/:id', updateIncome);
router.delete('/:id', deleteIncome);

module.exports = router;
