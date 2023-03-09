import React from 'react';
import logo from '../images/Asset 16@4x.png';

function Header () {

    return (
        <header className="container">
            <img src={logo}  width={200} height={53} alt="Little Lemon Logo"/>
        </header>
    )

}

export default Header;