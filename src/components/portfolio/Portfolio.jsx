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
    title: "Titulo 1",
    github: "https://github.com",
    demo: "demo live",
  },
  {
    id: 2,
    image: IMG2,
    title: "Titulo 2",
    github: "https://github.com",
    demo: "demo live",
  },
  {
    id: 3,
    image: IMG3,
    title: "Titulo 3",
    github: "https://github.com",
    demo: "demo live",
  },
  {
    id: 4,
    image: IMG4,
    title: "Titulo 4",
    github: "https://github.com",
    demo: "demo live",
  },
  {
    id: 5,
    image: IMG5,
    title: "Titulo 5",
    github: "https://github.com",
    demo: "demo live",
  },
  {
    id: 6,
    image: IMG6,
    title: "Titulo 6",
    github: "https://github.com",
    demo: "demo live",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos</h5>
      <h2>Portfólio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {return(
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
        )
          ;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
