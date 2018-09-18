import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import LayoutBase from '../../layouts/LayoutBase';
import fetch from '../../../utils/fetch';
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
export default class Component extends React.Component {
  
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
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell numeric>NIM</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Address</CustomTableCell>
            <CustomTableCell>Phone Number</CustomTableCell>
            <CustomTableCell>Gender</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {datamhs.map((i, v) => {
            return (
             <TableRow key="">
           
              <CustomTableCell numeric>{i.nim} </CustomTableCell>
              <CustomTableCell >{i.name} </CustomTableCell>
              <CustomTableCell >{i.address} </CustomTableCell>
              <CustomTableCell numeric>{i.phoneNumber} </CustomTableCell>
              <CustomTableCell >{i.gender} </CustomTableCell>

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