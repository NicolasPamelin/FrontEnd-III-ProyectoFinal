import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div>
        <button className="back-btn" onClick={() => navigate(-1)}>« Volver
        </button>
      </div>
      <div className="footer">
        <div className="dh-logo">
          <p>Powered by</p>
          <img src="/images/DH.png" alt="DH-logo" />
        </div>
        <div className="icon-footer">
          <img
            className="icons"
            src="/images/ico-facebook.png"
            alt="Facebook-logo"
          />
          <img
            className="icons"
            src="/images/ico-instagram.png"
            alt="Instagram-logo"
          />
          <img
            className="icons"
            src="/images/ico-tiktok.png"
            alt="TicTok-logo"
          />
          <img
            className="icons"
            src="/images/ico-whatsapp.png"
            alt="Whatsapp-logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
