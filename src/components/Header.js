import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Zysk</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#resources">Resources</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <div className="profile">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="profile-img"
        />
      </div>
    </header>
  );
};

export default Header;