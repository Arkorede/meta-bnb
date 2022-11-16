import React from "react";
import metabnb from "./metabnb.png";

function Nft() {
  return (
    <div>
      <div className="section-nft">
        <div className="nft-text-box">
          <h1 className="nft-heading text-white">Metabnb NFTs</h1>
          <p className="nft-description">
            Discover our NFT gift cards collection. Loyal customers get amazing
            gift cards which are traded as NFTs. These NFTs gives our customer
            access to loads of our exclusive services.
          </p>
          <a
            href="https://github.com/Arkorede"
            className="nft-link"
            style={{ color: "#a02279" }}
          >
            Learn more
          </a>
        </div>
        <img src={metabnb} alt="NFT images" className="nft-img" />
      </div>
    </div>
  );
}

export default Nft;
