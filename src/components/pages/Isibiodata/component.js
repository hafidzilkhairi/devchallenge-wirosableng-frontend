import React from 'react';
import AdminBase from '../../layouts/AdminBase';
import TextField from '../../elements/Textfield';
import Button from '../../elements/Button';
import fetch from '../../../utils/fetch';
export default class Component extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name:'',
      nim:'',
      address:'',
      phoneNumber:'',
      gender:'',
    }
    // ini untuk get
    this.getData();
    //diatas untuk get data
  }

  handleSubmit = event =>{
    event.preventDefault();
    const data = this.state;

    fetch({
      method:'post',
      url:'http://virtserver.swaggerhub.com/telkomdds/MockUpAPI/1.0.0/api/mahasiswa',
      data,
    }).then(res => {
      console.log(res)
      console.log(res.data)
    })
  }
  getData = () =>{
    fetch({
      method:'get',
      url:'http://virtserver.swaggerhub.com/telkomdds/MockUpAPI/1.0.0/api/mahasiswa',
    }).then(res => {
      console.log(res)
      console.log(res.data)
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const {classes} = this.props;
    return (
      <AdminBase>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
      <TextField label="NIM" name="nim" onChange={this.handleChange} /> 
          <TextField label="Name" name="name" onChange={this.handleChange}/>
          <TextField label="Address" name="address" onChange={this.handleChange}/>
          <TextField label="Phone" name="phoneNumber" onChange={this.handleChange}/>
          <TextField label="Gender" name="Gender" onChange={this.handleChange}/>
          <Button color="primary" text="Simpan" type="submit" />
          </form>  
      </AdminBase>
    );
  }
}
