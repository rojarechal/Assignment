import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="logo">
        <img src="logo.png" alt="Sisyphus" className="logo-image" />
        <h2>Sisyphus</h2>
      </div>
      <p className="testimonial-text">
        We’ve been using Untitled to kick start every new project and can’t imagine working without it.
      </p>
      <div className="author">
        <img src="candice.jpg" alt="Candice Wu" className="author-image" />
        <div>
          <p className="author-name">Candice Wu</p>
          <p className="author-role">Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
