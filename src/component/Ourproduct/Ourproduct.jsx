import React from "react";
import realbrooder from "../images/realbrooder.png";
import "./ourproduct.css"

function Ourproduct() {
  return (
    <div className="product" id="product">
      <div className="about">
        <h1>Our Product</h1>
      </div>
      <div className="product1">
        <div className="realBrooder">
          <img className="brooder" src={realbrooder} width="350" height={250} />
        </div>
        <div className="para">
          <h1>StawiBrood</h1>
          <p>
            The StawiBrood's goal is to automate the brooder's temperature
            <br/><br/> and humidity at optimal levels to meet the chick's requirement.
            <br></br> When temperature exceeds the needed threshold, the fan is 
            <br></br> activated hence good air circulation within the brooder; similarly,
            <br></br> when the temperature decreases below the optimum level, the brooder
            <br></br> bulb is activated and the brooder is warmed to the desired or 
            <br></br> required temperature. The feeding and drinking is automated to 
            <br></br> ensure that the chicks are fed at different needed times.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Ourproduct;
