import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const { translations } = useLanguage();

  return (
    <section id="experience">
      <h5>{translations.experienceTitle}</h5>
      <h2>{translations.experienceSubtitle}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{translations.frontendTitle}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HMTL5, CSS3 & Bootstrap</h4>
                <small className="text-light">{translations.advanced}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">{translations.advanced}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>ReactJs & AngularJs</h4>
                <small className="text-light">{translations.advanced}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>WordPress</h4>
                <small className="text-light">{translations.advanced}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Quasar</h4>
                <small className="text-light">{translations.intermediate}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Flutter</h4>
                <small className="text-light">{translations.intermediate}</small>
              </div>
            </article>
          </div>
        </div>
        {/*=======FIM DO FRONTEND====*/}
        <div className="experience__backend">
          <h3>{translations.backendTitle}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Spring Boot e REST APIs</h4>
                <small className="text-light">{translations.advanced}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java e JavaEE</h4>
                <small className="text-light">{translations.advanced}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>IBM MQ & Flyway</h4>
                <small className="text-light">{translations.intermediate}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JasperReports</h4>
                <small className="text-light">{translations.intermediate}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">{translations.intermediate}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL Oracle & PostgreSQL</h4>
                <small className="text-light">{translations.advanced}</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__tools">
          <h3>{translations.toolsTitle}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Power BI</h4>
                <small className="text-light">{translations.intermediate}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Dashboards e Indicadores</h4>
                <small className="text-light">{translations.intermediate}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>GitLab e GitHub</h4>
                <small className="text-light">{translations.advanced}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CI/CD - Jenkins</h4>
                <small className="text-light">{translations.advanced}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Linux Systems</h4>
                <small className="text-light">{translations.intermediate}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Wildfly, Jboss & Tomcat</h4>
                <small className="text-light">{translations.intermediate}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
