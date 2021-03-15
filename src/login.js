import React from 'react';
import './login.css';
import axios from 'axios';
import contrants from "./contrants/contrants";
import sha256 from 'crypto-js/sha256';
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

        const hash = sha256(this.state.userPwd).toString();
        axios.post(contrants.myAppUrl, {"userName": this.state.userName, "passWdHash": hash}).then(
            function (res) {
                if (res.data.respCode === "0000") {
                    alert("登录成功");
                    this.props.history.push("/menu");
                } else {
                    alert('登录失败: ' + res.data.respCode + "==>" + res.data.respDesc);
                }
            }
        ).catch(err => {alert(err.toString())});
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