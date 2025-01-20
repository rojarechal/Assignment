import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently asked questions</h1>
      <p className="faq-subtitle">
        Everything you need to know about the product and billing.
      </p>

      <div className="faq-list">
        <div className="faq-item">
          <h3>Is there a free trial available?</h3>
          <p>
            Yes, you can try us for free for 30 days. If you want, we’ll provide you
            with a free, personalized 30-minute onboarding call to get you up and running
            as soon as possible.
          </p>
        </div>
        <div className="faq-item">
          <h3>Can I change my plan later?</h3>
        </div>
        <div className="faq-item">
          <h3>What is your cancellation policy?</h3>
        </div>
        <div className="faq-item">
          <h3>Can other info be added to an invoice?</h3>
        </div>
        <div className="faq-item">
          <h3>How does billing work?</h3>
        </div>
        <div className="faq-item">
          <h3>How do I change my account email?</h3>
        </div>
      </div>

      <div className="faq-footer">
        <img
          src="team.jpg"
          alt="Team"
          className="team-image"
        />
        <p className="faq-footer-text">
          Still have questions? Can’t find the answer you’re looking for? Please chat with
          our friendly team.
        </p>
        <button className="cta-button">Get in touch</button>
      </div>
    </div>
  );
};

export default FAQ;
