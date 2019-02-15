import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
  },
  fabWrapper: {
    paddingTop: 20,
    paddingBottom: 20,
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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = event => {
    alert('New expense added:');
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Paper>
          <form onSubmit={this.handleSubmit}>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField
                id="time"
                type="text"
                label="Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField
                id="time"
                type="text"
                label="Vendor"
                name="vendor"
                value={this.state.vendor}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField
                id="time"
                type="text"
                label="Cost"
                name="cost"
                value={this.state.cost}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField
                id="time"
                type="text"
                label="Confirmed"
                name="confirmed"
                value={this.state.confirmed}
                onChange={this.handleChange}
              />
            </FormControl>
            <Paper className={classes.fabWrapper}>
              <Fab
                color="secondary"
                aria-label="Add"
                className={classes.fab}
                type="submit"
                value="Submit"
              >
                <AddIcon />
              </Fab>
            </Paper>
          </form>
        </Paper>
      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);
