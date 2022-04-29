import React from "react";
import { BsLinkedin } from "./../../../node_modules/react-icons/bs/index.esm";
import { BsGithub } from "react-icons/bs/index.esm";
import { BsFacebook } from "react-icons/bs/index.esm";
const HearderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ajocajunior/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/AjocaJunior" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/assis.junior.739/"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HearderSocials;
