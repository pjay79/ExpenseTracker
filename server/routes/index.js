import express from 'express';
import Expense from '../models/expense';

const routes = express.Router();

routes.get('/expenses', (req, res) => {
  Expense.find((err, expenses) => {
    if (err) {
      console.log(err);
    } else {
      return res.json(expenses);
    }
    return null;
  });
  return null;
});

routes.post('/expenses/add', (req, res) => {
  const expense = new Expense(req.body);
  expense
    .save(req.body)
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('Adding new expense failed.');
    });
});

module.exports = routes;
