import React from "react";
import "./about.css";
import ME from "../../assets/assisnerd.gif";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
const About = () => {
  return (
    <section id="about">
      <h5>Saiba um pouco</h5>
      <h2>SOBRE MIM</h2>

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
              <h5>Experiência</h5>
              <small>+ de 3 Anos de Experiência</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>+ de 10 Clientes Satisfeitos</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projectos</h5>
              <small>+ de 5 Projectos Publicados</small>
            </article>
          </div>
          <p>
            Assis Júnior, é um jovem licenciado em Informática de Gestão, pela
            Universidade Wutive, que profissionalizou-se no desenvolvimento de
            aplicativos web e android, com experiência em integração de métodos
            de pagamento como PayPal, Cartão Pré-Pago e MPesa, hospedagem de web
            apps, and more.
          </p>
          <a href="#contact" className="btn btn-primary">
            Saber Mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
