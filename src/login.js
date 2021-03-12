import React from 'react';
import './login.css'
import { message } from "antd";
const { Component } = React;

const loginWindowClass = "loginWindow";
const loginInputClass = "loginInput";
const loginButtonClass = "loginButton";

class Login extends Component {

    constructor() {
        super();
        this.login = this.login.bind(this);
        this.state = {
            userName : '',
            userPwd : '',
        }
    }

    login(){
        if(this.state.userName.length < 8 || this.state.userPwd.length < 8) {
            alert("用户名和密码长度必须大于等于8");
            this.setState({userName : '', userPwd : '',});
            return
        }

        if(this.state.userName === "admin123" && this.state.userPwd === "admin123") {
            this.props.history.push("/menu")
        }
    }

    handleChange(key, value) {
        this.setState({[key] : value});
    }

    render() {
        return(
            <div className = {loginWindowClass}>
                <input className = {loginInputClass} placeholder = "请输入用户名" onChange={e => this.handleChange('userName', e.target.value)} value = {this.state.userName}/><br/>
                <input className = {loginInputClass} placeholder = "请输入密码" onChange={e => this.handleChange('userPwd', e.target.value)} value = {this.state.userPwd} />
                <button className = {loginButtonClass} onClick = {this.login}>登录</button>
            </div>
        );
    }
}

export default  Login;