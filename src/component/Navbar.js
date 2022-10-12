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
            <a href="Navbar">About</a> 
          </li>
          <li>
            <a href="#product">Our product</a>
          </li>
          <li>
            <a href="#Team">Our Team</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        {/* <li> <Link to="#" className="hey">App</Link> </li> */}
      </nav>
      <div className="stawi">
        <h3>StawiBrood is here to</h3>
        <h1>
          Give your brooder a <br></br>fighting chance
        </h1>
        
      </div>
      {/* <div className="sifa">
        
          <div className="affordable">
          <i class="fa-light fa-crosshairs-simple"></i>
            <h3>Affordable</h3>
            <p>
              StawiBrood regulates humidity <br></br>
              within the brooder to keep <br></br> it warm
            </p>
          </div>
          <div className="accurate">
            
          <i class="fa-solid fa-temperature-quarter"></i>

            <h3>Accurate</h3>
            <p>
              StawiBrood regulates humidity <br></br>
              within the brooder to keep <br></br> it warm
            </p>
          </div>
          <div className="profitable">
          <i class="fa-solid fa-temperature-quarter"></i>

            <h3>Profitable</h3>
            <p>
              StawiBrood regulates humidity <br></br>
              within the brooder to keep <br></br> it warm
            </p>
          </div>
        </div> */}
    </div>
  );
}
export default Navbar;
