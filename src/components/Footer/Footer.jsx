import React from "react";

//Css
import "./Footer.scss";

//icons
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-container">
      Follow us:
      <div>
        <span>
          <FaFacebookSquare />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <RiTwitterXFill />
        </span>
        <span>
          <FaYoutube />
        </span>
        <span>
          <FaLinkedin />
        </span>
        <span>
          <FaPinterest />
        </span>
      </div>
    </div>
  );
};

export default Footer;
