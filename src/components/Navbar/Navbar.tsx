import React from "react";
import twitter from "../../assets/icons/twitter.png";
import discord from "../../assets/icons/discord.png";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

import "./navbar.css";
import { Link } from "react-scroll";
const Navbar: React.FC = () => {
  const [menu, setMenu] = React.useState(false);
  const showMenu = (): void => {
    setMenu(!menu);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <h1>CRYPTO PIMPS</h1>
      </div>
      <div className="nav-links">
        <Link smooth={true} duration={700} to="about">
          ABOUT
        </Link>
        <Link smooth={true} duration={700} to="team">
          TEAM
        </Link>
        <Link smooth={true} duration={700} to="road-map">
          ROADMAP
        </Link>
        <Link smooth={true} duration={700} to="faq">
          FAQ
        </Link>
      </div>
      <div className="external-links">
        <a href="https://twitter.com/Crypto_Pimps">
          <img className="twitter-link" src={twitter} alt="" />
        </a>
        <a href="/">
          <img className="discord-link" src={discord} alt="" />
        </a>
      </div>
      <div onClick={showMenu} className="menu-icon">
        <Menu />
      </div>
      <div className={menu ? "slide-menu active" : "slide-menu"}>
        <Close onClick={() => setMenu(false)} className="close-icon" />
        <div className="nav-links menu">
          <Link
            onClick={() => setMenu(false)}
            smooth={true}
            duration={700}
            to="about"
          >
            ABOUT
          </Link>
          <Link
            onClick={() => setMenu(false)}
            smooth={true}
            duration={700}
            to="team"
          >
            TEAM
          </Link>
          <Link
            onClick={() => setMenu(false)}
            smooth={true}
            duration={700}
            to="road-map"
          >
            ROADMAP
          </Link>
          <Link
            onClick={() => setMenu(false)}
            smooth={true}
            duration={700}
            to="faq"
          >
            FAQ
          </Link>
        </div>
        <div className="external-links menu">
          <a href="https://twitter.com/Crypto_Pimps">
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

export default Navbar;
