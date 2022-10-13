import React from "react";
import "./style.css";
import realbrooder from "../images/realbrooder.png";

function Ourproduct() {
  return (
    <div className="product" id="product">
      <div className="about">
        <h1>About Our Product</h1>
      </div>
      <div className="product1">
        <div className="realBrooder">
          <img className="brooder" src={realbrooder} width="350" height={250} />
        </div>
        <div className="para">
          <h1>StawiBrood</h1>
          <p>
            The StawiBrood's goal is to keep the brooder'stemperature and humidity <br></br> at optimal levels. When the
            temperature exceeds a certain threshold, the <br></br> fan activates and cools the brooder; similarly, when the
            temperature falls <br></br> below the optimum, the brooder bulb activates and warms the brooder to <br></br>the
            desired or required temperature. The feeding of feeds and water is<br></br>automated to ensure that the chicks are fed
            efficiently and that the <br></br> farmer is not overstretched.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Ourproduct;
