import React, { Component } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import SimpleTable from '../components/SimpleTable';

export default class ExpenseList extends Component {
  state = {
    expenses: [],
  };

  componentDidMount() {
    this.getExpenses();
  }

  getExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:3001/expenses/');
      console.log(response);
      this.setState({ expenses: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  addExpense = async (item) => {
    try {
      const response = await axios.post('http://localhost:3001/expenses/add', item);
      const { _id } = response.data.data;
      const newExpense = item;
      newExpense._id = _id;
      this.setState(prevState => ({
        expenses: [...prevState.expenses, newExpense],
      }));
    } catch (err) {
      console.log(err);
    }
  };

  deleteExpense = async (_id) => {
    try {
      await axios.delete(`http://localhost:3001/expenses/delete/${_id}`);
      this.getExpenses();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { expenses } = this.state;
    console.log(expenses);
    return (
      <div>
        <Form addExpense={this.addExpense} />
        <SimpleTable expenses={expenses} deleteExpense={this.deleteExpense} />
      </div>
    );
  }
}
