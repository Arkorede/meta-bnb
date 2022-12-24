import React from "react";
import metabnbLogo from "./metabnbLogo.png";
import facebookLogo from "./facebookLogo.png";
import instagramLogo from "./instagramLogo.png";
import twitterLogo from "./twitterLogo.png";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="section-footer">
          <div className="logo-col">
            <a href="/#" className="footer-logo">
              <img src={metabnbLogo} alt="Metabnb logo" className="logo" />
            </a>

            <ul className="social-links">
              <li>
                <a
                  href="https://facebook.com/israel.ashaolu.5"
                  className="footer-link"
                >
                  <img
                    src={facebookLogo}
                    alt="Facebook Logo"
                    className="facebook-logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://Instagram.com/izrael_korede"
                  className="footer-link"
                >
                  <img
                    src={instagramLogo}
                    alt="Instagram logo"
                    className="instagram-logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/IsraelAshaolu"
                  className="footer-link"
                >
                  <img
                    src={twitterLogo}
                    alt="Twitter logo"
                    className="twitter-logo"
                  />
                </a>
              </li>
            </ul>

            <p className="copyright">
              &copy; <span className="year">2022</span> Metabnb
            </p>
          </div>
          <nav className="nav-col">
            <p className="footer-heading">Community</p>
            <ul className="footer-nav">
              <li>
                <a href="/#" className="footer-link">
                  NFT
                </a>
              </li>
              <li>
                <a href="/#" className="footer-link">
                  Tokens
                </a>
              </li>
              <li>
                <a href="/#" className="footer-link">
                  Landlords
                </a>
              </li>
              <li>
                <a href="/#" className="footer-link">
                  Discord
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Places</p>
            <ul className="footer-nav">
              <li>
                <a href="/#" className="footer-link">
                  Castle
                </a>
              </li>
              <li>
                <a href="/#" className="footer-link">
                  Farms
                </a>
              </li>
              <li>
                <a href="/#" className="footer-link">
                  Beach
                </a>
              </li>
              <li>
                <a href="/#" className="footer-link">
                  Learn more
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">About us</p>
            <ul className="footer-nav">
              <li>
                <a href="/#" className="footer-link">
                  Road-map
                </a>
              </li>
              <li>
                <a href="/#" className="footer-link">
                  Creators
                </a>
              </li>
              <li>
                <a href="/#" className="footer-link">
                  Career
                </a>
              </li>
              <li>
                <a href="/#" className="footer-link">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
