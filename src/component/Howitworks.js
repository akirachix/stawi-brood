import React from "react";

function Howitworks() {
  return (
    <div className="section2">
      <div>
        <div className="how-it-works">
          <h1>How it works</h1>
        </div>
        <div className="boxess">
          <div className="boxx1">
            <h3>Humidity</h3>
            <p>
              StawiBrood regulates the humidity within the brooder to by 
              controlling the flow of air in and out of the brooder
            </p>
          </div>
          <div className="boxx2">
            <i class="fa-light fa-droplet-degree"></i>
            <h3>Temperature</h3>
            <p>
              StawiBrood regulates temperature within the brooder by 
              adjusting brooding temperature to fit what the chicks need 
            </p>
          </div>
          <div className="boxx3">
            <h3>Feeds and Water</h3>
            <p>
              StawiBrood automates 
              the feed and water intake at regulated time intervals
            </p>
          </div>
        </div>
        <div className="box2"></div>
      </div>
    </div>
  );
}

export default Howitworks;
