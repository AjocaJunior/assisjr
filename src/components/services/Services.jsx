import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  const { translations } = useLanguage();

  return (
    <section id="services">
      <h5>{translations.servicesTitle}</h5>
      <h2>{translations.servicesSubtitle}</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>{translations.backendDevTitle}</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.backendDev1}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.backendDev2}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.backendDev3}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.backendDev4}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.backendDev5}</p>
            </li>
          </ul>
        </article>
        {/* FIM DO BACKEND DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>{translations.webDevTitle}</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.webDev1}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.webDev2}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.webDev3}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.webDev4}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.webDev5}</p>
            </li>
          </ul>
        </article>
        {/* FIM DO WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>{translations.biTitle}</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.bi1}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.bi2}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.bi3}</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.bi4}</p>
            </li>
             <li>
              <BiCheck className="service__list-icon" />
              <p>{translations.bi5}</p>
            </li>
          </ul>
        </article>

        {/* FIM DO ANDROID DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
