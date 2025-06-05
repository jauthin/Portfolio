import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-wrapper">
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <h2 className="about-title">About Me</h2>
            <div className="about-content">
              <p>
                Hi! I'm <strong>Jauthin Kushalappa P.M</strong>, an engineering student specializing in Information Science and Engineering (ISE).
              </p>
              <p>
                Passionate about technology, full stack web development, and solving real-world problems.
              </p>
            </div>
          </div>
          <div className="flip-box-back">
            <h2 className="about-title">More About Me</h2>
            <div className="about-content">
              <p>
                I’m also an athlete — discipline, focus, and teamwork define me.
              </p>
              <p>
                Proud Kodava, bringing cultural strength and a committed mindset. Currently exploring the MERN stack and working on impactful web projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
