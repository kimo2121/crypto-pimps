import React from "react";
import "./footer.css";
import twitter from "../../assets/icons/twitter.png";
import discord from "../../assets/icons/discord.png";
import { Link } from "react-scroll";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <h1>CRYPTO PIMPS</h1>
      <div className="footer-nav">
        <Link smooth={true} duration={700} to="road-map">
          ABOUT
        </Link>
        <Link smooth={true} duration={700} to="road-map">
          TEAM
        </Link>
        <Link smooth={true} duration={700} to="road-map">
          ROADMAP
        </Link>
        <Link smooth={true} duration={700} to="road-map">
          FAQ
        </Link>
        <div className="footer-external-links">
          <a href="/">
            <img className="twitter-link" src={twitter} alt="" />
          </a>
          <a href="/">
            <img className="discord-link" src={discord} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
