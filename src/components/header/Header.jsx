import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/assisfoto.png";
import HearderSocials from "./HearderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, I'm</h5>
        <h1>Assis Júnior</h1>
        <h5 className="text-light">Android and Web Developer</h5>
        <CTA />
        <HearderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
