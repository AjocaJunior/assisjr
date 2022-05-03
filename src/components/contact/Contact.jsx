import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
const Contact = () => {
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
      <h5>Mais informações</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>assisjunior33@gmail.com</h5>
            <a
              href="mailto:assisjunior33@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Envie uma mensagem
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Assis Júnior</h5>
            <a
              href="https://m.me/assis.junior.739/"
              target="_blank"
              rel="noreferrer"
            >
              Envie uma mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+258 84 2183 464</h5>
            <a
              href="https://wa.me/258842183464/?text=Olá Assis, vi teu portfolio online!"
              target="_blank"
              rel="noreferrer"
            >
              Envie uma mensagem
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Nome e Sobrenome"
            required
          />
          <input type="text" name="email" placeholder="Seu Email" required />
          <textarea
            name="message"
            id=""
            placeholder="Sua Mensagem"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
