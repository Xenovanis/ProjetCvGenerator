// src/components/About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/about.jpg'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>Who We Are</h3>
              <h2>We are team 3, 6 Developers here to learn react</h2>
            </div>
          </div>

          <div className="col-lg-6 d-flex alblogign-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src={logo} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
