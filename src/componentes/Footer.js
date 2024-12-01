import { BsInstagram, BsTwitter } from "react-icons/bs";
import Logo from "../imagens/Logo.svg";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="logo flash" />
        </div>
        <div className="footer-icons">
          <BsInstagram />
          <FaFacebook />
          <SiLinkedin />
          <BsTwitter />
        </div>
      </div>

      <div className="footer-section-two">
        <div className="footer-section-colums">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Nossa Marca</span>
          <span>Carreira</span>
          <span>Avaliação</span>
          <span>Nosso Trabalho</span>
        </div>
        <div className="footer-section-colums">
          <span>62-99335-7679</span>
          <span>Flash@tech.com</span>
          <span>Solutions@tech.com</span>
          <span>SEO@tech.com</span>
        </div>

        <div className="footer-section-colums">
          <span>Termos & Condições</span>
          <span>Politica de Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
