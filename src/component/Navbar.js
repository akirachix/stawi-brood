import React from "react";
import { Link } from "react-scroll";
import stawibrood from "../images/Stawibrood.png";
import './style.css'

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="main" className="logo">
          <img src={stawibrood} alt="logo" />
        </Link>
        <input className="menu-btn" type='check-box' id='menu-btn'/>
        <label className="menu-icon" for='menu-btn'></label>
        <span className="nav-icon"></span>
        <ul>
            <li> <Link to="main" className="active">Home</Link> </li>
            <li> <Link to="main" className="active"></Link> </li>
            <li> <Link to="main" className="active"></Link> </li>
            <li> <Link to="main" className="active"></Link> </li>
            <li> <Link to="main" className="active"></Link> </li>
            <li> <Link to="main" className="active"></Link> </li>


        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
