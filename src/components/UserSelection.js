import React from "react";
import "./UserSelection.css";

const UserSelection = () => {
  return (
    <div className="user-selection">
      <h2>Hello, Conor</h2>
      <h3>Who are you?</h3>
      <div className="options">
        <div className="option student">
          <span className="icon">📚</span>
          <div>
            <h4>Student</h4>
            <p>Who is still studying</p>
          </div>
        </div>
        <div className="option professional">
          <span className="icon">💼</span>
          <div>
            <h4>Professional</h4>
            <p>One who is working</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
