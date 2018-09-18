import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
export default class Component extends React.Component {
 render(){
     const {text, classes} = this.props;

     return (
        <p className={classes.pp}>
            {text}
        </p>
     );
 }
}