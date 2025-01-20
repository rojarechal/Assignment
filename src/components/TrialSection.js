import React from 'react';
import './TrialSection.css';  // Import CSS file for styling

const TrialSection = () => {
  return (
    <div className="trial-section">
      <h2>Start your free trial</h2>
      <p>Join over 4,000+ startups already growing with Untitled</p>
      <div className="button-container">
        <button className="learn-more">Learn more</button>
        <button className="get-started">Get started</button>
      </div>
    </div>
  );
};

export default TrialSection;
