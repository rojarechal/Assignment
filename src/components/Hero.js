import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="badge">New feature: Check out the team dashboard →</div>
      <h1 className="hero-title">Beautiful analytics to grow smarter</h1>
      <p className="hero-description">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="hero-buttons">
        <button className="btn demo-btn">Demo</button>
        <button className="btn signup-btn">Sign Up</button>
      </div>
    </section>
  );
};

export default Hero;