import React from 'react';
import logo from '../images/Asset 16@4x.png';
import Navbar from './Navbar.js';
import './header.css';

function Header () {

    return (
        <header>
            <div className='header-logo'>
                <img src={logo}  width={200} height={53} alt="Little Lemon Logo"/>
            </div>
            <Navbar />
        </header>
    )

}

export default Header;