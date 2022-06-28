import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "SIGEHE - UniTiva",
    github: "https://github.com/AjocaJunior/sigeheapp",
    demo: "https://sigeheapp.herokuapp.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Educa WebApp",
    github: "https://github.com/AjocaJunior/educa-webpage",
    demo: "https://educa.co.mz",
  },
  {
    id: 3,
    image: IMG3,
    title: "One Media Site",
    github: "https://github.com/AjocaJunior/Onemedia-website",
    demo: "https://onemedia.herokuapp.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "App de Actividades",
    github: "https://github.com/AjocaJunior/quasar-todo",
    demo: "https://assisjrqr.netlify.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "Siversa ERP",
    github: "https://github.com/AjocaJunior",
    demo: "https://siversaerp.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Outros Projectos",
    github: "https://github.com/AjocaJunior",
    demo: "https://drive.google.com/drive/folders/1PnzyKL7VLQqVtg3G68t3ugv8C_9g-EMf?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos</h5>
      <h2>Portfólio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
