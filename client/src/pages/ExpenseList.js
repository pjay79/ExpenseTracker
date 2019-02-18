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
      this.setState({ expenses: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  addExpenses = async (item) => {
    try {
      await axios.post('http://localhost:3001/expenses/add', item);
      this.setState(prevState => ({
        expenses: [...prevState.expenses, item],
      }));
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { expenses } = this.state;
    console.log(expenses);
    return (
      <div>
        <Form onSubmit={this.addExpenses} />
        <SimpleTable expenses={expenses} />
      </div>
    );
  }
}
