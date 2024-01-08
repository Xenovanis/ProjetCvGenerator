// src/components/Hero.js
import React from 'react';
import logo from '../assets/img/hero-img.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'



const Hero = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Create your resume now in a Fast, Easy and Modern way</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">Create a good cv in just a clicks</h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <NavLink to="/getstarted" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Get Started</span>
                  <i className="bi bi-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src={logo} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
