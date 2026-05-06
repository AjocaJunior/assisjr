import React, { useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const { translations } = useLanguage();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hougwps",
        "template_ipxea4m",
        form.current,
        "fH1fwTOXMYmjCtNmd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>{translations.contactTitle}</h5>
      <h2>{translations.contactSubtitle}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>{translations.email}</h4>
            <h5>ajocajunior@gmail.com</h5>
            <a
              href="mailto:ajocajunior@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {translations.sendMessage}
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>{translations.messenger}</h4>
            <h5>Assis Júnior</h5>
            <a
              href="https://m.me/assis.junior.739/"
              target="_blank"
              rel="noreferrer"
            >
              {translations.sendMessage}
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>{translations.whatsapp}</h4>
            <h5>+258 87 2183 468</h5>
            <a
              href="https://wa.me/258872183468/?text=Olá Assis, vi teu portfolio online!"
              target="_blank"
              rel="noreferrer"
            >
              {translations.sendMessage}
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={translations.namePlaceholder}
            required
          />
          <input type="text" name="email" placeholder={translations.emailPlaceholder} required />
          <textarea
            name="message"
            id=""
            placeholder={translations.messagePlaceholder}
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {translations.sendButton}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
