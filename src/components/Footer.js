import React from 'react';
import logo20 from '../images/Asset 9@4x.png';

function Footer () {

    return (
        <footer>
        <section id="footerLogo">
            <img src={logo20} height={200} alt="Little Lemon Logo" />
        </section>

            <section className="doormatNav">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </section>
            
            <section className="contactNav">
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </section>
            
            <section className="socialNav">
                <h3>Social Media</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </section>
        </footer>

    )

}

export default Footer;