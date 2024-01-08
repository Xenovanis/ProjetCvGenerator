import React from 'react';
import theme1Image from '../assets/img/Themes/theme1.png';
import theme2Image from '../assets/img/Themes/theme2.png';
import theme3Image from '../assets/img/Themes/theme3.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Themes = () => {
  return (
    <section id="themes" className="themes">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Themes</h2>
          <p>Check our themes</p>
        </header>

        <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={theme1Image} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Theme 1</h4>
                <p>Blue</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={theme2Image} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Theme 2</h4>
                <p>White</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={theme3Image} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Theme 3</h4>
                <p>Grey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Themes;
