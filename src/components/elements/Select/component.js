import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';



export default class Component extends React.Component {
  state = {
    project: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        {/* <Button className={classes.button} onClick={this.handleOpen}>
          Open the select
        </Button> */}
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Project</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.project}
            onChange={this.handleChange}
            inputProps={{
              name: 'project',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Dummy Project 3"}>Dummy Project 1</MenuItem>
            <MenuItem value={"Dummy Project 2"}>Dummy Project 2</MenuItem>
            <MenuItem value={"Dummy Project 3"}>Dummy Project 3</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

// ControlledOpenSelect.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ControlledOpenSelect);