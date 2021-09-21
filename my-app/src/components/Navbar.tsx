import React from 'react';
import {Avatar, Button, Menu, Typography} from "antd";
import {Link} from 'react-router-dom';
import icon from '../images/cryptocurrency.png'
import {HomeOutlined} from "@ant-design/icons";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
};

export default Navbar;
