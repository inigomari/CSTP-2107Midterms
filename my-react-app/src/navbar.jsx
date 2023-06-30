import React from 'react';
import './css/navbar.css';


const NavBar = () => (
    <div className='navbar-container'>
        <nav>
                <a href="/">Home</a>
                <a href="/about">About this website</a>
                <a href="/joke">Go to Jokes</a>
        </nav>
    </div>
)

export default NavBar;