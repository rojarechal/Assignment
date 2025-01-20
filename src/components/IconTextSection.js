import React from 'react';
import './IconTextSection.css';

const IconTextSection = () => {
  return (
    <div className="icon-text-section">
      <div className="row">
        <div className="column">
          <div className="heading">
            <img src="icon1.png" alt="icon1" className="icon" />
            
            <h3>Share team inboxes</h3>
          </div>
          <p className="body-text">This is the body text for the first column.</p>
        </div>
        <div className="column">
          <div className="heading">
            <img src="icon1.png" alt="icon1" className="icon" />
            
            <h3>Delivery instant Answers </h3>
          </div>
          <p className="body-text">This is the body text for the second column.</p>
        </div>
        <div className="column">
          <div className="heading">
            <img src="icon1.png" alt="icon1" className="icon" />
           
            <h3>Amanage your team with reports</h3>
          </div>
          <p className="body-text">This is the body text for the third column.</p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="heading">
            <img src="icon1.png" alt="icon1" className="icon" />
           
            <h3>Connect with customers</h3>
          </div>
          <p className="body-text">This is the body text for the first column in the second row.</p>
        </div>
        <div className="column">
          <div className="heading">
            <img src="icon1.png" alt="icon1" className="icon" />
            
            <h3>Connect the tools you already use </h3>
          </div>
          <p className="body-text">This is the body text for the second column in the second row.</p>
        </div>
        <div className="column">
          <div className="heading">
            <img src="icon1.png" alt="icon1" className="icon" />
           
            <h3>Our people make the difference </h3>
          </div>
          <p className="body-text">This is the body text for the third column in the second row.</p>
        </div>
      </div>
    </div>
  );
};

export default IconTextSection;
