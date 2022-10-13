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
            The StawiBrood's goal is to automate the brooder's temperature and humidity <br></br> at optimal levels to meet the chick's requirement. When the
            When temperature exceeds the needed threshold, the fan is activated hence good air circulation within the brooder; similarly, when the
            temperature decreases below the optimum level , the brooder bulb is activated and the brooder is warmed to the
            desired or required temperature. The feeding and drinking is 
            automated to ensure that the chicks are fed
            at different needed times <br></br> .
          </p>
        </div>
      </div>
    </div>
  );
}
export default Ourproduct;
