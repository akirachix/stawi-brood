import React from "react";
import chicks from "../images/chicks.jpg";

function Howitworks() {
  return (
    <div className="section2">
      <div>
        <div className="how-it-works">
          <h1>How it works</h1>
        </div>
        <div className="boxess">
          <div className="boxx1">
            {/* <i class="fa-solid fa-temperature-quarter"></i> */}

            <h3>Temparature</h3>
            <p>
              StawiBrood regulates humidity
              within the brooder to keep <br></br> it warm
            </p>
          </div>
          <div className="boxx2">
            <i class="fa-light fa-droplet-degree"></i>
            <h3>Humidity</h3>
            <p>
              StawiBrood regulates humidity <br></br>
              within the brooder to keep <br></br> the brooder good air circulation
            </p>
          </div>
          <div className="boxx3">
            <h3>feeds and water</h3>
            <p>
              StawiBrood automates <br></br>
              feedings of both water <br></br> and food within the brooder
            </p>
          </div>
        </div>
        <div className="box2"></div>
      </div>

    </div>
  );
}

export default Howitworks;
