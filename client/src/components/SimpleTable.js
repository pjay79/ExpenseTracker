import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
  iconWrapper: {
    display: 'flex',
    justifyContent: 'left',
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 18,
  },
});

const SimpleTable = (props) => {
  const { classes, expenses, deleteExpense } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Action</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Vendor</TableCell>
            <TableCell align="left">Confirmed</TableCell>
            <TableCell align="right">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map(expense => (
            <TableRow key={expense._id}>
              <TableCell align="left" className={classes.iconWrapper}>
                <IconButton type="submit" onClick={() => deleteExpense(expense._id)}>
                  <DeleteIcon className={classes.icon} />
                </IconButton>
              </TableCell>
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
};

SimpleTable.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimpleTable);
