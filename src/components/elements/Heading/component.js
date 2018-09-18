import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
export default class Component extends React.Component {
 render(){
     const {text, classes} = this.props;

     return (
        <div className={classes.root}>
            <h3 className={classes.head3}>{text}</h3>
        </div>
     );
 }
}