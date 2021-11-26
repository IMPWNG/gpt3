import React from 'react';
import  { RiMenu3Line, RineCloseLin } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links"></div>
            <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
            <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt3">What is GTP3 ?</a></p>
                    <p><a href="#possibility">Open IA</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
        </div>
    )
}

export default Navbar
