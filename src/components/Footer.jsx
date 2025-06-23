import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center p-3">
      <p>© 2023 - Pizzería Mamma Mia! - Todos los derechos reservados</p>
      <div>
        <a href="/privacy-policy">Política de Privacidad</a> | <a href="/terms-of-service">Términos de Servicio</a> | <a href="/contact">Contáctanos</a>
      </div>
      <div>
        <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
        <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="https://instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
