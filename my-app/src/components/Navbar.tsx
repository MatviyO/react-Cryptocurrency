import React from 'react';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
            </div>
        </div>
    );
};

export default Navbar;
