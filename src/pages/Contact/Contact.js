import "./Contact.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_87mdz4w', 'template_adyzt8n', form.current, 'MG-eJP3l68yQIg1l2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div>
        <h2> Formulario de Contacto </h2>
    <form ref={form} onSubmit={sendEmail}>
            <label for="nombre">Nombre</label>
            <input type="text" name="user_name" id='nombre' placeholder="Nombre" required />
            <label for='email'>Email</label>
            <input type="email" name="user_email" id='email' placeholder="juancarlos@ejemplo.com" required />
            <label>Mensaje</label>
            <textarea for="mensaje" name="message" />
            <input type="submit" name='enviar' value="Enviar" />
    </form>
    </div>
  );
};

export default Contact;