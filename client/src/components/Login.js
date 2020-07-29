import React from 'react';
import axios from 'axios';
import { Modal, Button, Input } from 'antd';
import {UserOutlined} from '@ant-design/icons';
const initialState={
  email:"",
  password:"",
  visible:false ,


};



class Login extends React.Component {

    state = initialState ; 

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleSubmit =(e) => {
    e.preventDefault();
    
    console.log(this.state);
    this.setState(initialState); 
  
    axios({
      url:'http://localhost:8080/api/user',
      method:'POST',
      data:this.state,
    })
    .then(() =>{
      console.log('Veri kaydedildi', )
    })
    .catch(() =>{
      console.log('Hata' )
    });
  
  
  };

    handleChange= (e) => {
      this.setState({
         [e.target.name] : e.target.value ,
      })
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      
    });
  };

    render() {
        return (
            <div>
                <Button style={{ background: "#5B2121", borderColor: "#5B2121"}} type="primary" onClick={this.showModal} icon={<UserOutlined />}>
          Giris Yap
                </Button>
        <Modal
          title="Giris Yap"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <form onSubmit={this.handleSubmit} className="col-md-12 ofset-md-2">

                <div className="form-group">
                    <label>Email address</label>
                    <Input type="email" name="email"  onChange={ this.handleChange }  value={this.state.email}  placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <Input type="password" name="password" value={this.state.password} onChange={ this.handleChange } placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit">Kayıt</button>
            </form>
        </Modal>
            </div>
        )
    }
}

export default Login;