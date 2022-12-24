import Modal from "react-modal";
import React, { useState } from "react";
import firstLogo from "./firstLogo.png";
import secondLogo from "./secondLogo.png";
import maskWallet from "./maskWallet.png";
import walletConnect from "./walletConnect.png";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 350,
    padding: 0,
  },
};

function Header() {
  const handleClick = (event) => {
    event.currentTarget.classList.toggle("nav-open");
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="header sticky-top" onClick={handleClick}>
      <div className="img-wrapper">
        <img src={firstLogo} alt="A small house" className="first-logo" />
        <img src={secondLogo} alt="Metabnb" className="second-logo" />
      </div>

      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="/#">
              Home
            </a>
          </li>
          <li>
            <Link to="/place" class="main-nav-link">
              Place to stay
            </Link>
          </li>
          <li>
            <a class="main-nav-link" href="/#">
              NFTs
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="/#">
              Community
            </a>
          </li>
          <li>
            <button className="btn-cta" onClick={setModalOpen}>
              Connect Wallet
            </button>
            <Modal
              isOpen={modalOpen}
              onRequestClose={() => setModalOpen(false)}
              style={customStyles}
            >
              <div>
                <div className="modal-header">
                  <div
                    className="modal-title"
                    style={{ fontFamily: "Red Rose" }}
                  >
                    Connect Wallet
                  </div>
                  <button
                    className="btn-modal"
                    onClick={() => setModalOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="modal_btn_close"
                      // style={{ border: "none", background: "none" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <hr className="w-100" />
                <div className="modal-body p-3">
                  <p className="modal-body-text">
                    Choose your preferred wallet
                  </p>
                  <div className="wallet-box">
                    <div className="wallet-desc">
                      <img src={maskWallet} alt="maskWallet logo" />
                      <p className="wallet-name">MetaMask</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="wallet-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div className="wallet-box">
                    <div className="wallet-desc">
                      <img src={walletConnect} alt="WalletConnect logo" />
                      <p className="wallet-name">WalletConnect</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="wallet-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Modal>
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
