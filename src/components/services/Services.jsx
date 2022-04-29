import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>O que faço</h5>
      <h2>Serviços</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
          </ul>
        </article>
        {/* FIM DO WEB DESIGN */}
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Backend</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
          </ul>
        </article>
        {/* FIM DO BACKEND DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Android</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviço...</p>
            </li>
          </ul>
        </article>

        {/* FIM DO ANDROID DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
