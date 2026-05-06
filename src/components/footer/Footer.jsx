/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTelegram } from "react-icons/bs";
import { BsLinkedin } from "./../../../node_modules/react-icons/bs/index.esm";
import "./footer.css";

const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">{translations.footerHome}</a>
        </li>
        <li>
          <a href="#about">{translations.footerAbout}</a>
        </li>
        <li>
          <a href="#experience">{translations.footerExperience}</a>
        </li>
        <li>
          <a href="#services">{translations.footerServices}</a>
        </li>
        <li>
          <a href="#portfolio">{translations.footerPortfolio}</a>
        </li>
        <li>
          <a href="#references">{translations.footerReferences}</a>
        </li>
        <li>
          <a href="#contact">{translations.footerContact}</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/assis.junior.739" target='_blank' rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/ajocajunior/" target='_blank' rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="https://t.me/drizzy_33/" target='_blank' rel="noreferrer">
          <BsTelegram />
        </a>
        <a href="https://www.linkedin.com/in/ajocajunior/" target='_blank' rel="noreferrer">
          <BsLinkedin/>
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; {translations.footerCopyright}</small>
      </div>
    </footer>
  );
};

export default Footer;
