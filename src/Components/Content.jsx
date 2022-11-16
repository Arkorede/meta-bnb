import React from "react";
import houses from "./houses.png";
import mbToken from "./mbToken.png";
import metaMask from "./metaMask.png";
import openSea from "./openSea.png";
import houseOne from "./houseOne.png";
import houseTwo from "./houseTwo.png";
import houseThree from "./houseThree.png";
import houseFour from "./houseFour.png";
import houseFive from "./houseFive.png";
import houseSix from "./houseSix.png";
import houseSeven from "./houseSeven.png";
import houseEight from "./houseEight.png";
import stars from "./stars.png";
import metabnb from "./metabnb.png";

function Content() {
  return (
    <div>
      {/* HERO SECTION */}
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
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div
              className="hero-location d-flex"
              style={{ position: "static" }}
            >
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
      {/* FEATURED SECTION */}
      <div className="section-featured">
        <div className="logos">
          <img src={mbToken} alt="MBToken logo" className="img-fluid" />
          <img src={metaMask} alt="Metamask logo" className="img-fluid" />
          <img src={openSea} alt="open sea logo" className="img-fluid" />
        </div>
      </div>
      {/* HOW IT WORKS SECTION */}
      <div className="section-how">
        <h1 className="how-heading">Inspiration for your next adventure</h1>
        <div className="cards">
          <div className="card p-3" style={{ borderRadius: "13px" }}>
            <img
              src={houseOne}
              className="card-img-top img-fluid"
              alt="A House in the metaverse"
            />
            <div class="card-body p-0">
              <div class="card-text mt-3 mb-3">
                <small className="item-a text-start fs-5">Desert King</small>
                <small className="item-b text-end fs-5 fw-bold">
                  1MBT per night
                </small>
                <small className="item-c text-start fs-5">2345km away</small>
                <small className="item-d text-end fs-5">
                  available for 2 weeks stay
                </small>
              </div>
              <img src={stars} alt="Ratings" className="stars mb-2 img-fluid" />
            </div>
          </div>

          <div className="card p-3" style={{ borderRadius: "13px" }}>
            <img
              src={houseTwo}
              className="card-img-top img-fluid"
              alt="A House in the metaverse"
            />
            <div class="card-body p-0">
              <div class="card-text mt-3 mb-3">
                <small className="item-a text-start fs-5">Desert King</small>
                <small className="item-b text-end fs-5 fw-bold">
                  1MBT per night
                </small>
                <small className="item-c text-start fs-5">2345km away</small>
                <small className="item-d text-end fs-5">
                  available for 2 weeks stay
                </small>
              </div>
              <img src={stars} alt="Ratings" className="stars mb-2 img-fluid" />
            </div>
          </div>

          <div className="card p-3" style={{ borderRadius: "13px" }}>
            <img
              src={houseThree}
              className="card-img-top img-fluid"
              alt="A House in the metaverse"
            />
            <div class="card-body p-0">
              <div class="card-text mt-3 mb-3">
                <small className="item-a text-start fs-5">Desert King</small>
                <small className="item-b text-end fs-5 fw-bold">
                  1MBT per night
                </small>
                <small className="item-c text-start fs-5">2345km away</small>
                <small className="item-d text-end fs-5">
                  available for 2 weeks stay
                </small>
              </div>
              <img src={stars} alt="Ratings" className="stars mb-2 img-fluid" />
            </div>
          </div>

          <div className="card p-3" style={{ borderRadius: "13px" }}>
            <img
              src={houseFour}
              className="card-img-top img-fluid"
              alt="A House in the metaverse"
            />
            <div class="card-body p-0">
              <div class="card-text mt-3 mb-3">
                <small className="item-a text-start fs-5">Desert King</small>
                <small className="item-b text-end fs-5 fw-bold">
                  1MBT per night
                </small>
                <small className="item-c text-start fs-5">2345km away</small>
                <small className="item-d text-end fs-5">
                  available for 2 weeks stay
                </small>
              </div>
              <img src={stars} alt="Ratings" className="stars mb-2 img-fluid" />
            </div>
          </div>

          <div className="card p-3" style={{ borderRadius: "13px" }}>
            <img
              src={houseFive}
              className="card-img-top img-fluid"
              alt="A House in the metaverse"
            />
            <div class="card-body p-0">
              <div class="card-text mt-3 mb-3">
                <small className="item-a text-start fs-5">Desert King</small>
                <small className="item-b text-end fs-5 fw-bold">
                  1MBT per night
                </small>
                <small className="item-c text-start fs-5">2345km away</small>
                <small className="item-d text-end fs-5">
                  available for 2 weeks stay
                </small>
              </div>
              <img src={stars} alt="Ratings" className="stars mb-2 img-fluid" />
            </div>
          </div>

          <div className="card p-3" style={{ borderRadius: "13px" }}>
            <img
              src={houseSix}
              className="card-img-top img-fluid"
              alt="A House in the metaverse"
            />
            <div class="card-body p-0">
              <div class="card-text mt-3 mb-3">
                <small className="item-a text-start fs-5">Desert King</small>
                <small className="item-b text-end fs-5 fw-bold">
                  1MBT per night
                </small>
                <small className="item-c text-start fs-5">2345km away</small>
                <small className="item-d text-end fs-5">
                  available for 2 weeks stay
                </small>
              </div>
              <img src={stars} alt="Ratings" className="stars mb-2 img-fluid" />
            </div>
          </div>

          <div className="card p-3" style={{ borderRadius: "13px" }}>
            <img
              src={houseSeven}
              className="card-img-top img-fluid"
              alt="A House in the metaverse"
            />
            <div class="card-body p-0">
              <div class="card-text mt-3 mb-3">
                <small className="item-a text-start fs-5">Desert King</small>
                <small className="item-b text-end fs-5 fw-bold">
                  1MBT per night
                </small>
                <small className="item-c text-start fs-5">2345km away</small>
                <small className="item-d text-end fs-5">
                  available for 2 weeks stay
                </small>
              </div>
              <img src={stars} alt="Ratings" className="stars mb-2 img-fluid" />
            </div>
          </div>

          <div className="card p-3" style={{ borderRadius: "13px" }}>
            <img
              src={houseEight}
              className="card-img-top img-fluid"
              alt="A House in the metaverse"
            />
            <div class="card-body p-0">
              <div class="card-text mt-3 mb-3">
                <small className="item-a text-start fs-5">Desert King</small>
                <small className="item-b text-end fs-5 fw-bold">
                  1MBT per night
                </small>
                <small className="item-c text-start fs-5">2345km away</small>
                <small className="item-d text-end fs-5">
                  available for 2 weeks stay
                </small>
              </div>
              <img src={stars} alt="Ratings" className="stars mb-2 img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* NFTs SECTION */}
      <div>
        <div className="section-nft">
          <div className="nft-text-box">
            <h1 className="nft-heading text-white">Metabnb NFTs</h1>
            <p className="nft-description">
              Discover our NFT gift cards collection. Loyal customers get
              amazing gift cards which are traded as NFTs. These NFTs gives our
              customer access to loads of our exclusive services.
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
    </div>
  );
}

export default Content;
