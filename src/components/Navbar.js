import React from 'react';
import Header from './Header';

import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
        <nav className="navbar">
            <div>
                <Header />
            </div>
            <div>
                <ul className="navLinks">
                    <li><NavLink to='/' className='nav-item'>Home</NavLink></li>
                    <li><NavLink to='/about' className='nav-item'>About</NavLink></li>
                    <li><NavLink to='/menu' className='nav-item'>Menu</NavLink></li>
                    <li><NavLink to='/reservations' className='nav-item'>Reservations</NavLink></li>
                    <li><NavLink to='/order-online' className='nav-item'>Order Online</NavLink></li>
                    <li><NavLink to='/login' className='nav-item'>Login</NavLink></li>
                </ul>
            </div>
        </nav>

        </>
    )

}

export default Navbar;