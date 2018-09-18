import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
export default class Component extends React.Component {
 render(){
     const {label, name, classes} = this.props;

     return (
        <div className={classes.root}>
        <label className={classes.label}>
            {label}
            <input type="text" name={name}/>
        </label>
        </div>
     );
 }
}