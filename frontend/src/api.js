import axios from "axios";

const api = axios.create({
  baseURL: "https://budget-track-backend.vercel.app/api",
});

export const getIncomes = () => api.get('/incomes')
export const createIncome = (income) => api.post('/incomes',income)
export const updateIncome = (id, income) => api.put(`/incomes/${id}`, income);
export const deleteIncome = (id) => api.delete(`/incomes/${id}`);

export const getExpenses = () => api.get('/expenses')
export const createExpense = (expense) => api.post('/expenses',expense)
export const updateExpense = (id,expense) => api.put(`/expenses/${id}`,expense)
export const deleteExpense = (id) => api.delete(`/expenses/${id}`);