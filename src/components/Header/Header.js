import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

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
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/order-review">Order Review</Link>
                    <Link to="/manage-inventory">Manage Inventory</Link>
                    <Link to='/about'>About</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;