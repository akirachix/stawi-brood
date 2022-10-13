import React from "react";
import { Link } from "react-scroll";
import stawibrood from "../images/Stawibrood.png";

import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="header">
        <div className="logo-nav">
          <Link to="main" className="logo">
            <img src={stawibrood} alt="logo" />
          </Link>
        </div>

        <ul>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#Team">Our Team</a>
          </li>
          <li>
            <a href="#product">Our product</a>
          </li>
          <li>
            <a href="Navbar">About</a>
          </li>
          
          
          
        </ul>
      </nav>
      <div className="stawi">
        <h2>StawiBrood is here to</h2>
        <h1>
          Give your chicks a <br></br>fighting chance
        </h1>
      </div>
    </div>
  );
}
export default Navbar;
