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
import Select from '../../elements/Select';
import Paragraph from '../../elements/Paragraph';

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
           <Paper className={classes.select_width}>
           <Heading text="Project"></Heading>
           <Select></Select>
           <Paragraph text="Description : Sample Paragraphle desc"></Paragraph>
           <Paragraph text="Stack Holder : DEGM"></Paragraph>
           <Paragraph text="Paragraphrint Now : 4"></Paragraph>
           <Paragraph text="Start Date : 12/06/2018"></Paragraph>
           <Paragraph text="End Date : 12/06/2018(11 hari lagi)"></Paragraph>


           </Paper>
        <Paper className={classes.table1_width}>
      <Heading text="Member"></Heading>
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


      <Paper className={classes.root}>
      <Heading text="Best Talent Performance"></Heading>
      <Table className={classes.table2}>
        <TableHead>
          <TableRow>
            <CustomTableCell numeric>No</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Stream</CustomTableCell>
            <CustomTableCell numeric>Point Burn</CustomTableCell>
            <CustomTableCell numeric>Point Remaining</CustomTableCell>
            <CustomTableCell numeric>Point Queue</CustomTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
        {datamhs.map((i, v) => {
            return (
             <TableRow key="">
           
              <CustomTableCell numeric>{i.nim} </CustomTableCell>
              <CustomTableCell >{i.name} </CustomTableCell>
              <CustomTableCell >{i.address} </CustomTableCell>
              <CustomTableCell numeric>{i.nim} </CustomTableCell>
              <CustomTableCell numeric>{i.nim} </CustomTableCell>
              <CustomTableCell numeric>{i.nim} </CustomTableCell>
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