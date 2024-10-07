import React from "react";

// css
import "./Hero.scss";

//Images
import heroImg1 from "../../assets/heroImg1.jpg";
import heroImg2 from "../../assets/heroImg2.jpg";
import heroImg3 from "../../assets/heroImg3.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-card">
        <div className="hero-box">
          <div className="hero-item">
            <img src={heroImg1} alt="ERROR" />
            <div className="hero-text">
              <h1>Explore curated hotel guides</h1>
              <p>
                Start planning your next trip with hotels selected by chase
                travel editors, from spectacular palace hotels to
                honeymoon-worthy overwater bungalows
              </p>
              <button>Explore more</button>
            </div>
          </div>
        </div>
        <div className="hero-box">
          <div className="hero-item row-reverse">
            <img src={heroImg2} alt="ERROR" />
            <div className="hero-text">
              <h1>Accept payments anytime, anywhere</h1>
              <p>
                Make sure you&#x2019;re prepared for every sale, wherever your
                customers want to pay. Process credit cards anywhere in the U.S.
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
        <div className="hero-box">
          <div className="hero-item">
            <img src={heroImg3} alt="ERROR" />
            <div className="hero-text">
              <h1>Open our most popular savings account</h1>
              <p>
                Apply for a new Chase Savings℠ account to start saving for what
                matters.
              </p>
              <button>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
