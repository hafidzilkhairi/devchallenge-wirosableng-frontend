import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Heading from '../../elements/Heading';
import Paragraph from '../../elements/Paragraph';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import DateTimePicker from '../../elements/Datetimepicker';
import DateTimePicker from '../../elements/Datetimepicker2';

import LayoutBase from '../../layouts/LayoutBase';
import fetch from '../../../utils/fetch';
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
export default class Component extends React.Component {
  state = {
    open1: false,
    open2: false,
    open3: false,
    scroll: 'paper',
  };

  handleClickOpen1 = scroll => () => {
    this.setState({ open1: true, scroll });
  };

  handleClose1 = () => {
    this.setState({ open1: false });
  };

  handleClickOpen2 = scroll => () => {
    this.setState({ open2: true, scroll });
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };

  handleClickOpen3 = scroll => () => {
    this.setState({ open3: true, scroll });
  };

  handleClose3 = () => {
    this.setState({ open3: false });
  };
  constructor(props){
    super(props);
    this.state = {
      datamhs : [],
    }
    
  }
  componentDidMount(){
    this.getData();
  }
  getData = () =>{
    fetch({
      method:'get',
      url:'http://virtserver.swaggerhub.com/telkomdds/MockUpAPI/1.0.0/api/mahasiswa',
    }).then(res => {
      // console.log(res)
      // console.log(res.data)
      this.setState({
        datamhs : res
      });
    })
  }
  render(){

    const { classes } = this.props;
    const {datamhs} = this.state;
   console.log(datamhs);
    return (
        <LayoutBase>
           <Paper className={classes.root}>
      <Heading text="Date"></Heading>
      <DateTimePicker></DateTimePicker>
    </Paper>
          
        <Paper className={classes.table1_width}>
      <Heading text="Talent"></Heading>
      
        {datamhs.map((i, v) => {
            return (
              <div>
           <Paragraph text={i.nim+" "+i.name+" "+i.address}></Paragraph>
           </div>
            );
          })}
          
      <Button onClick={this.handleClickOpen1('paper')}>more</Button>
      <Dialog
          open={this.state.open1}
          onClose={this.handleClose1}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Talent</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum
              nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Donec sed odio dui. Donec ullamcorper 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose1} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
    </Paper>
    <Paper className={classes.table1_width}>
      <Heading text="Best Squad Performance"></Heading>
      
        {datamhs.map((i, v) => {
            return (
              <div>
           <Paragraph text={i.nim+" "+i.name+" "+i.address}></Paragraph>
           </div>
            );
          })}
          
      <Button onClick={this.handleClickOpen2('paper')}>more</Button>
      <Dialog
          open={this.state.open2}
          onClose={this.handleClose2}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Best Squad Performance</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum
              nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Donec sed odio dui. Donec ullamcorper 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose2} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
    </Paper>
    <Paper className={classes.table1_width}>
      <Heading text="Best Product Performance"></Heading>
      
        {datamhs.map((i, v) => {
            return (
              <div>
           <Paragraph text={i.nim+" "+i.name+" "+i.address}></Paragraph>
           </div>
            );
          })}
          
      <Button onClick={this.handleClickOpen3('paper')}>more</Button>
      <Dialog
          open={this.state.open3}
          onClose={this.handleClose3}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Best Product Performance</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum
              nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Donec sed odio dui. Donec ullamcorper 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose3} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
    </Paper>


     
      </LayoutBase>
    );
  }
}
Component.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object,
};