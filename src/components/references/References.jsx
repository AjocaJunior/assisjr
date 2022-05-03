import React from "react";
import "./references.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const data = [
  {
    avatar: AVATAR1,
    name: "Inácio Sumbana",
    review: "Fundador e Presidente da MozSistemas",
  },
  {
    avatar: AVATAR2,
    name: "Edson Manhique",
    review: "Fundador e Presidente da MozSistemas",
  },
  {
    avatar: AVATAR3,
    name: "Nélio Macombo",
    review: "Fundador e Presidente da MozSistemas",
  },
  {
    avatar: AVATAR4,
    name: "Cassamo Nuvunga",
    review: "Fundador e Presidente da MozSistemas",
  },
];

const References = () => {
  return (
    <section id="references">
      <h5>Referências dos meus trabalhos</h5>
      <h2>Referências</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default References;
