import React from "react";
import twitter from "../../assets/icons/twitter.png";
import discord from "../../assets/icons/discord.png";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

import "./navbar.css";
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
        <a href="/about">ABOUT</a>
        <a href="/team">TEAM</a>
        <a href="/road-map">ROADMAP</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="external-links">
        <a href="/">
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
          <a href="/about">ABOUT</a>
          <a href="/team">TEAM</a>
          <a href="/road-map">ROADMAP</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="external-links menu">
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

export default Navbar;
