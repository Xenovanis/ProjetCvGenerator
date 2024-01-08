// src/components/About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/about.png'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>TEAM 3</h3>
             
              HASNA ASSEDDEK<br></br>
MOHSSIN AMNSOUR <br></br>
MOHCINE LAAROUBI<br></br>
EL MONTASSIR AYOUB<br></br>
MOHAMED BEN TALEB<br></br>
NASSIM ET-TYZIKY< br></br>



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
