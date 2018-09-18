import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AdminBase from '../../layouts/AdminBase';
import fetch from '../../../utils/fetch';
import Button from '@material-ui/core/Button';


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
      url:'http://api.myjson.com/bins/qv7mg',
    }).then(res => {
      // console.log(res)
      // console.log(res.data)
      this.setState({
        datamhs : res
      });
    })
  }
   handleClick = () => {
    this.setState({
      open: true,
    });
  };
  render(){

    const { classes } = this.props;
    const {datamhs} = this.state;
   console.log(datamhs);
    return (
        <AdminBase>
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell >NIM</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Address</TableCell>
            <TableCell >Phone Number</TableCell>
            <TableCell >Gender</TableCell>
            <TableCell >Matkul</TableCell>
            <TableCell >Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {datamhs.map((i, v) => {
            return (
             <TableRow key="">
           
                <TableCell >{i.nim}</TableCell>
                <TableCell >{i.name}</TableCell>
                <TableCell >{i.address}</TableCell>
                <TableCell >{i.phoneNumber}</TableCell>
                <TableCell >{i.gender}</TableCell>
                <TableCell >
                  {
                    i.class.map((i,v)=>{
                      {i.name}
                    })
                  }
                   </TableCell>
                   <TableCell >
                  {
                    i.class.map((i,v)=>{
                      {i.score}
                    })
                  }
                   </TableCell>
                

              </TableRow>
            );
          })}
          
        </TableBody>
      </Table>
    </Paper>
      </AdminBase>
    );
  }
}
// SimpleTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };