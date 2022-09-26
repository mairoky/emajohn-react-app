import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav>
            <div className="container">
                {/* Logo */}
                <div className="logo">
                    <img src={logo} alt="emajohn-logo" />
                </div>
                {/* Menu */}
                <div className="menu">
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/order-review">Order Review</a>
                    <a href="/manage-inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;