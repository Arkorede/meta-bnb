import React from "react";
import houses from "./houses.png";

function Hero() {
  return (
    <div>
      <div className="section-hero">
        <div className="hero">
          <div className="hero-heading">
            Rent a <span className="hero-highlight">Place</span> away from
            <span className="hero-highlight"> Home</span> in the
            <span className="hero-highlight"> Metaverse</span>
          </div>
          <p className="hero-description">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="hero-location d-flex" style={{ position: "static" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search for Location"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
            <span
              className="input-group-text text-white fs-3 px-5 py-4 btn-search"
              id="inputGroup-sizing-lg"
            >
              Search
            </span>
          </div>
        </div>
        <div className="hero-img">
          <img
            src={houses}
            alt="A group of Houses"
            className="img-fluid mx-auto d-block"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
