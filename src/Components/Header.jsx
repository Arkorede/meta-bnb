import firstLogo from "./firstLogo.png";
import secondLogo from "./secondLogo.png";
import React from "react";

function Header() {
  const handleClick = (event) => {
    event.currentTarget.classList.toggle("nav-open");
  };

  return (
    <div className="header" onClick={handleClick}>
      <div className="img-wrapper">
        <img src={firstLogo} alt="A small house" className="first-logo" />
        <img src={secondLogo} alt="Metabnb" className="second-logo" />
      </div>

      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="https://github.com/Arkorede">
              Home
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="https://github.com/Arkorede">
              Place to stay
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="https://github.com/Arkorede">
              NFTs
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="https://github.com/Arkorede">
              Community
            </a>
          </li>
          <li>
            <button className="btn-cta">Connect Wallet</button>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="btn__menu"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="btn__close"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default Header;
