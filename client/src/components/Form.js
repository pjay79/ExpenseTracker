import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  formControl: {
    margin: theme.spacing.unit * 4,
    marginBottom: 0,
  },
  formWrapper: {
    display: 'flex',
    paddingTop: 0,
    width: '100%',
    justifyContent: 'center',
  },
  fabWrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    margin: theme.spacing.unit,
  },
});

class ComposedTextField extends Component {
  state = {
    name: '',
    vendor: '',
    cost: 0,
    confirmed: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name, vendor, cost, confirmed,
    } = this.state;
    const item = {
      name,
      vendor,
      cost,
      confirmed,
    };
    axios.post('http://localhost:3001/expenses/add', item).then(res => console.log(res.data));
  };

  render() {
    const { classes } = this.props;
    const {
      name, vendor, cost, confirmed,
    } = this.state;

    return (
      <div className={classes.container}>
        <Paper className={classes.formWrapper}>
          <form onSubmit={this.handleSubmit}>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField
                id="time"
                type="text"
                label="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField
                id="time"
                type="text"
                label="Vendor"
                name="vendor"
                value={vendor}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField
                id="time"
                type="text"
                label="Cost"
                name="cost"
                value={cost}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField
                id="time"
                type="text"
                label="Confirmed"
                name="confirmed"
                value={confirmed}
                onChange={this.handleChange}
              />
            </FormControl>
            <div className={classes.fabWrapper}>
              <Fab
                color="secondary"
                aria-label="Add"
                className={classes.fab}
                type="submit"
                value="Submit"
              >
                <AddIcon />
              </Fab>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ComposedTextField);
