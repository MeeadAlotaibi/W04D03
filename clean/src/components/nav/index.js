import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/cards" className="link">
            cards
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
