import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default class Component extends React.Component {
  render() {
    const { classes, color,text,type } = this.props;
    
    return (
      <Button variant="contained" color={color} className={classes.button} type={type}>
        {text}
      </Button>
    );
  }
}

// ContainedButtons.propTypes = {
//   classes: PropTypes.object.isRequired,
// };