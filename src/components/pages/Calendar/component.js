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
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
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
          
      <Button onClick={this.handleClickOpen('body')}>more</Button>
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
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
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
    </Paper>
    <Paper className={classes.table1_width}>
      <Heading text="Best Squad Performance"></Heading>
      <Table className={classes.table1}>
        <TableHead>
          <TableRow>
            <CustomTableCell numeric>No</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Stream</CustomTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
        {datamhs.map((i, v) => {
            return (
             <TableRow key="">
           
              <CustomTableCell numeric>{i.nim} </CustomTableCell>
              <CustomTableCell >{i.name} </CustomTableCell>
              <CustomTableCell >{i.address} </CustomTableCell>
              </TableRow>
            );
          })}
          
        </TableBody>
      </Table>
    </Paper>
    <Paper className={classes.table1_width}>
      <Heading text="Best Product Performance"></Heading>
      <Table className={classes.table1}>
        <TableHead>
          <TableRow>
            <CustomTableCell numeric>No</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Stream</CustomTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
        {datamhs.map((i, v) => {
            return (
             <TableRow key="">
           
              <CustomTableCell numeric>{i.nim} </CustomTableCell>
              <CustomTableCell >{i.name} </CustomTableCell>
              <CustomTableCell >{i.address} </CustomTableCell>
              </TableRow>
            );
          })}
          
        </TableBody>
      </Table>
    </Paper>


     
      </LayoutBase>
    );
  }
}
Component.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object,
};