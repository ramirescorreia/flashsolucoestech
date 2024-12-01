import { BsFillPlayCircleFill } from "react-icons/bs";
import AboutBackground from "../imagens/imagem google.png";

const About = () => {
  return (
    <div className="about-section-container" id="sobre">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="site bem posicionado" />
      </div>

      
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre Nós</p>
        <h1 className="primary-heading">
          Nulla vel libero facilisis felis mattis finibus convallis eu sapien.
        </h1>
        <p className="primary-text">
          Aliquam imperdiet et sapiens at ultrices. Morbi a dapibus lectus.
          Nulla venenatis malesuada nisi efficitur porttitor. Sed egestas dolor
          eu rutrum sollicitudin
        </p>
        <p className="primary-text">
          Nunc justo lectus, porta et mattis a, cursus ut orci. Pellentesque
          vitae nibh ut enim ultricies pulvinar. Vestibulum ante ipsum primis in
          faucibus orci luctus et
        </p>
        <div className="about-button-container">
          <button className="secondary-button">Leia Mais</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Assista nosso video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
