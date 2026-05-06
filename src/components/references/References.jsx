import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./references.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import AVATAR5 from "../../assets/avatar5.jpg";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const References = () => {
  const { translations } = useLanguage();

  const data = [
    {
      avatar: AVATAR1,
      name: translations.ref1Name,
      review: translations.ref1Review,
    },
    {
      avatar: AVATAR2,
      name: translations.ref2Name,
      review: translations.ref2Review,
    },
    {
      avatar: AVATAR3,
      name: translations.ref3Name,
      review: translations.ref3Review,
    },
    {
      avatar: AVATAR4,
      name: translations.ref4Name,
      review: translations.ref4Review,
    },
    {
      avatar: AVATAR5,
      name: translations.ref5Name,
      review: translations.ref5Review,
    }
  ];

  return (
    <section id="references">
      <h5>{translations.referencesTitle}</h5>
      <h2>{translations.referencesSubtitle}</h2>

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
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
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
