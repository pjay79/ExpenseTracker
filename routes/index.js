// import express from 'express';
// import Expense from '../models/expense';

const express = require('express');
const Expense = require('../models/expense');

const routes = express.Router();

routes.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    return res.json(expenses);
  } catch (err) {
    console.log(err);
    return null;
  }
});

routes.post('/expenses/add', async (req, res) => {
  try {
    const expense = await new Expense(req.body);
    const data = await expense.save(req.body);
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(400).send('Adding new expense failed.');
  }
});

module.exports = routes;
