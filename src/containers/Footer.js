import React from 'react';
import logo20 from '../images/Asset 9@4x.png';
import { NavLink } from 'react-router-dom';
import './footer.css';

function Footer () {

    return (
        <footer className="footer">
            <div className="footer-container">
            <section className="footer-logo">
                <img src={logo20} height={300} alt="Little Lemon Logo" />
            </section>

            <section className="footer-links">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><NavLink to='/' className='nav-item'>Home</NavLink></li>
                    <li><NavLink to='/about' className='nav-item'>About</NavLink></li>
                    <li><NavLink to='/menu' className='nav-item'>Menu</NavLink></li>
                    <li><NavLink to='/booking-page' className='nav-item'>Reservations</NavLink></li>
                    <li><NavLink to='/order-online' className='nav-item'>Order Online</NavLink></li>
                    <li><NavLink to='/login' className='nav-item'>Login</NavLink></li>
                </ul>
            </section>

            <section className="footer-links">
                <h3>Contact</h3>
                <ul>
                    <li>13 Lemon Ave</li>
                    <li>(555)555-5555)</li>
                    <li>contact@littlelemon.com</li>
                </ul>
            </section>

            <section className="footer-links">
                <h3>Social Media</h3>
                <ul>
                    <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
                </ul>
            </section>
            </div>
        </footer>

    )

}

export default Footer;