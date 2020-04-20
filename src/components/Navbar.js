import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">UI/UX</div>
      <ul className="list">
        <li className="link">
          <a href="/">Home</a>
        </li>
        <li className="link">
          <a href="/">About</a>
        </li>
        <li className="link">
          <a href="/">Services</a>
        </li>
        <li className="link">
          <a href="/">Product</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
