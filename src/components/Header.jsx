// // src/components/Header.js
import React from 'react';
import logo from '../assets/img/logo.png'
// import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src={logo} alt="" />
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            <li><NavLink to="/" className="nav-link scrollto active" href="#hero">Home</NavLink></li>
            <li><NavLink to="/themes" className="nav-link scrollto" href="#themes">Themes</NavLink></li>
            <li><NavLink to="/about" className="nav-link scrollto" href="#about">Team</NavLink></li>
            <li><NavLink to="/contact" className="nav-link scrollto" href="#contact">Contact</NavLink></li>
            <li><NavLink to="/getstarted" className="getstarted scrollto" href="#">Get Started</NavLink></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
