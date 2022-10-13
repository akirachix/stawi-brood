import React from "react";
import koyo from "../images/Koyo.png";
import Nancy from "../images/Nancy.png";
import Virginia from "../images/Virginia.png";
import Mitchie from "../images/mitchie.png";

function Meetteam() {
  return (
    <div className="meet" id="Team">
      <div className="hehe">
        <h1>Meet the StawiBrood Team</h1>
      </div>
      <div className="team">
        <div className="koyo">
          <img src={koyo} width={206} height={200} />
          <h4>Conslate Koyo</h4>
          <p>Software Developer</p>
        </div>
        <div className="virgy">
          <img src={Virginia} width={206} height={200} />
          <h4>Virginia Njeri</h4>
          <p>Software Developer</p>
        </div>
        <div className="nancy">
          <img src={Nancy} width={206} height={200} />
          <h4>Nancy Awour</h4>
          <p>Software Developer</p>
        </div>

        <div className="mitchie">
          <img src={Mitchie} width={206} height={200} />
          <h4>Mitchelle Hope</h4>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Meetteam;
