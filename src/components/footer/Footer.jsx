/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTelegram } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#portfolio">Portfólio</a>
        </li>
        <li>
          <a href="#references">Referências</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
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
      </div>
      <div className="footer__copyright">
        <small>&copy; Ajoca Jr - Todos os direitos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
