import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./about.css";
import ME from "../../assets/assisnerd.gif";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";

const About = () => {
  const { translations } = useLanguage();

  return (
    <section id="about">
      <h5>{translations.aboutTitle}</h5>
      <h2>{translations.aboutSubtitle}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Sobre mim" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{translations.aboutExperience}</h5>
              <small>{translations.aboutExperienceDesc}</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>{translations.aboutSystems}</h5>
              <small>{translations.aboutSystemsDesc}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{translations.aboutProjects}</h5>
              <small>{translations.aboutProjectsDesc}</small>
            </article>
          </div>
          <p>
            {translations.aboutDescription}
          </p>
          <a href="#contact" className="btn btn-primary">
            {translations.aboutBtn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
