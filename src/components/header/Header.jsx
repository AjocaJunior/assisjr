import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/assisfoto.png";
import HearderSocials from "./HearderSocials";

const Header = () => {
  const { translations } = useLanguage();

  return (
    <header>
      <div className="container header__container">
        <h5>{translations.greeting}</h5>
        <h1>{translations.name}</h1>
        <h5 className="text-light">{translations.subtitle}</h5>
        <CTA />
        <HearderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          {translations.scrollDown}
        </a>
      </div>
    </header>
  );
};

export default Header;
