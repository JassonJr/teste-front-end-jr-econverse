import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-above">
        <ul className="footer-about-us">
          <h2 className="about-tittle">Sobre nós</h2>
          <li className="footer-li">conheça</li>
          <li className="footer-li">como comprar</li>
          <li className="footer-li">indicação e desconto</li>
          <div className="social-media">
            <img src="./src/Assets/svg/facebook.svg" alt="facebook" />
            <img src="./src/Assets/svg/instagram.svg" alt="instagram" />
            <img src="./src/Assets/svg/youtube.svg" alt="youtube" />
          </div>
        </ul>
        <ul className="footer-info">
          <h2 className="footer-title up">Informações úteis</h2>
          <li className="footer-li">fale conosco</li>
          <li className="footer-li">dúvidas</li>
          <li className="footer-li">prazo de entrega</li>
          <li className="footer-li">formas de pagamento</li>
          <li className="footer-li">política de privacidade</li>
          <li className="footer-li">trocas e devoluções</li>
        </ul>
        <div>
          <h2 className="footer-title up">formas de pagamento</h2>
          <img
            className="footer-payments"
            src="./src/Assets/svg/formas_pagamento.svg"
            alt="formas de pagamento"
          />
        </div>
        <div className="footer-subscription">
          <h2 className="sub-title">
            Cadastre-se e Receba nossas
            <br />
            <span className="highlight-title">novidades e promoções</span>
          </h2>
          <p className="sub-text">
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>
          <div className="input-container">
            <input className="sub-input" type="text" placeholder="SEU E-MAIL" />
            <button className="sub-button">OK</button>
          </div>
        </div>
      </div>
      <div className="footer-copyrights">
        <p className="copyright-text">
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
        <div className="footer-brands">
          <img src="./src/Assets/svg/econverse.svg" alt="econverse" />
          <img src="./src/Assets/svg/vtexwhite.svg" alt="vtex" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
