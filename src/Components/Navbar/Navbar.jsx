import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.scss';
import { SiAerlingus } from 'react-icons/si';

const Navbar = () => {
    const [active, setActive] = useState('');

    const toggleNav = () => {
        setActive(active === 'activeNavbar' ? '' : 'activeNavbar');
    }

    return (
        <section className="navBarSection">
            <div className="header flex">
                <div className="logoDiv">
                    <Link to="home" smooth={true} duration={500} className="logo">
                        <h1 className="flex"><SiAerlingus className="icon" /> GoWander</h1>
                    </Link>
                </div>
                <div className={`navMenu ${active}`}>
                    <ul className="navlists flex">
                        <li className="navItem">
                            <Link to="home" smooth={true} duration={500} className="navlink">Home</Link>
                        </li>
                        <li className="navItem">
                            <Link to="about" smooth={true} duration={500} className="navlink">About Us</Link>
                        </li>
                        <li className="navItem">
                            <Link to="blog" smooth={true} duration={500} className="navlink">Blog</Link>
                        </li>
                        <li className="navItem">
                            <Link to="contact" smooth={true} duration={500} className="navlink">Contact</Link>
                        </li>
                        <li className="navItem">
                            <button className="btn loginbtn">LOGIN</button>
                        </li>
                        <li className="navItem">
                            <button className="btn signupbtn">SIGN UP</button>
                        </li>
                    </ul>
                </div>
                <button className="navToggle" onClick={toggleNav}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </section>
    );
}

export default Navbar;
