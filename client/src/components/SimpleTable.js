import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    overflowY: 'auto',
  },
  table: {
    minWidth: 700,
    marginBottom: 75,
  },
});

class SimpleTable extends Component {
  state = {
    expenses: [],
  };

  componentDidMount() {
    this.getExpenses();
  }

  getExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:3001/expenses/');
      this.setState({ expenses: response.data }, () => {
        console.log(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { classes } = this.props;
    const { expenses } = this.state;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Vendor</TableCell>
              <TableCell align="left">Confirmed</TableCell>
              <TableCell align="right">Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map(expense => (
              <TableRow key={expense.id}>
                <TableCell component="th" scope="row">
                  {expense.name}
                </TableCell>
                <TableCell align="left">{expense.vendor}</TableCell>
                <TableCell align="left">{expense.confirmed.toString()}</TableCell>
                <TableCell align="right">{expense.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SimpleTable);
