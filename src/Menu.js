import React from 'react';
import {Menu as AntMenu, Image, Layout} from "antd";

const {Item, SubMenu} = AntMenu;
const {Sider, Content} = Layout;
const {Component} = React;

class Menu extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : '',
            userPwd : '',
        }
    }

    render() {
        return(
            <Layout>
            <Sider>
                <AntMenu>
                    <Item>班级管理</Item>
                    <Item>课程管理</Item>
                </AntMenu>
            </Sider>
            </Layout>
        );
    }
}

export default Menu;