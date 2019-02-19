// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    required: false,
  },
  cost: {
    type: Number,
    required: false,
  },
  confirmed: {
    type: Boolean,
    required: true,
  },
});

const Expense = mongoose.model('expense', ExpenseSchema);

module.exports = Expense;
