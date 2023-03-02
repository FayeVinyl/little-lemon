import React from 'react';
import logo20 from '../images/Asset 20@4x.png';

function Footer () {

    return (
        <>
        <section id="footerLogo">
            <img src={logo20} alt="Little Lemon Logo" />
        </section>

        <section id="navigation">
            <section>
                <h1>Doormat Navigation</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </section>
            <section>
                <h1>Contact</h1>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </section>
            <section>
                <h1>Social Media</h1>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </section>
        </section>
        </>

    )

}

export default Footer;