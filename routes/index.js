const express = require('express');
const Expense = require('../models/expense');

const routes = express.Router();

routes.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).send(expenses);
  } catch (err) {
    res.status(400).send(err);
  }
});

routes.post('/expenses/add', async (req, res) => {
  try {
    const item = await new Expense(req.body);
    const expense = await item.save(req.body);
    res.status(200).send({ data: expense });
  } catch (err) {
    res.status(400).send(err);
  }
});

routes.put('/expenses/update/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const expense = Expense.findByIdAndUpdate(_id, req.body);
    res.status(200).send({ data: expense });
  } catch (err) {
    res.status(400).send(err);
  }
});

routes.delete('/expenses/delete/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    await Expense.findByIdAndRemove(_id);
    res.status(200).send('Deleted expense successful');
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = routes;
