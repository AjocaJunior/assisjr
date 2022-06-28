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
              <p>CMS Site</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Loja Online</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design Gráfico</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Alojamento e Domínio</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Redes Sociais</p>
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
              <p>Construição de API</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Gestão de Base de dados</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serviços na Nuvem</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Métodos de Pagamento</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mecanismos de busca</p>
            </li>
          </ul>
        </article>
        {/* FIM DO BACKEND DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Mobile</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Aplicativos Hibridos</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desenho de UX/UI</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Armanezamento e Notificações</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Publicar na Apple ou Google Play Store</p>
            </li>
          </ul>
        </article>

        {/* FIM DO ANDROID DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
