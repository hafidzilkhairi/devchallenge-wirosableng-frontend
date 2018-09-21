// import { withStyles } from '@material-ui/core/styles';
// import Component from './component';
// import styles from './styles';

// export default withStyles(styles)(Component);
import React from 'react';
import Calendar from 'react-calendar/dist/entry';

// import Calendar from 'react-calendar/dist/entry.nostyle';
export default class Component extends React.Component {
    state = {
        date: new Date(),
      }
    
      onChange = date => this.setState({ date })
    
      render() {
        return (
          <div>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
            <h1>aa</h1>
          </div>
        );
      }
}
