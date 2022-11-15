import React from "react";
import mbToken from "./mbToken.png";
import metaMask from "./metaMask.png";
import openSea from "./openSea.png";

function Featured() {
  return (
    <div className="section-featured">
      <div className="logos">
        <img src={mbToken} alt="MBToken logo" className="img-fluid" />
        <img src={metaMask} alt="Metamask logo" className="img-fluid" />
        <img src={openSea} alt="open sea logo" className="img-fluid" />
      </div>
    </div>
  );
}

export default Featured;
