import React from 'react'
import "./FooterStyle.css"

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="top">
          <h3>Travelbay</h3>
          <div className="social">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <ul>
              <li className="li-footer">About</li>
              <li className="li-footer">Partnerships</li>
              <li className="li-footer">Careers</li>
              <li className="li-footer">Newsroom</li>
              <li className="li-footer">Advertising</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li className="li-footer">Contact</li>
              <li className="li-footer">Terms</li>
              <li className="li-footer">Policy</li>
              <li className="li-footer">Privacy</li>
              <li className="li-footer">Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer