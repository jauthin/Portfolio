import React from 'react';
import './Pic.css';
import da1 from '../assets/da1.jpg'; // Make sure the path is correct

function Pic() {
  return (
    <div className="pic-flip-wrapper">
      <div className="pic-flip-box">
        <div className="pic-flip-inner">

          <div className="pic-front">
            <img src={da1} alt="Profile" />
          </div>

          <div className="pic-back">
            <p>
              Hi! I'm <strong>Jauthin Kushalappa P.M</strong>, an engineering student specializing in Information Science and Engineering (ISE).
              Passionate about full stack development, MERN stack, and solving real-world problems.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pic;
