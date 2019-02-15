import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

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
});

class ComposedTextField extends React.Component {
  state = {
    name: 'Composed TextField',
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Paper>
          <form>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField id="time" type="text" label="Name" />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField id="time" type="text" label="Vendor" />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField id="time" type="text" label="Cost" />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
              <TextField id="time" type="text" label="Confirmed" />
            </FormControl>
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
