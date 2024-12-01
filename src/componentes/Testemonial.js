import { AiFillStar } from "react-icons/ai";
import ProfilePic from "../imagens/john-doe-image.png";

const Testemonial = () => {
  return (
    <div className="work-section-wrapper" id="avaliacao">
      <div className="work-section-top">
        <p className="primary-subheading">Avaliação</p>
        <h1 className="primary-heading">O que dizem sobre nós</h1>
        <p className="primary-text">
          Morbi blandit sed ipsum in accumsan. Nullam sollicitudin rhoncus arcu
          nec accumsan. Mecenas porttitor vehicula purus ut vestibulum.
        </p>
      </div>

      <div className="testemonial-section-botton">
        <img src={ProfilePic} alt="imagem do avaliador" />
        <p>
          Donec sit amet blandit sem. Duis euismod nec mauris posuere maximus.
          Ut tincidunt mollis facilisis. Morbi dictum accumsan odio, um tempus
          elit bibendum id. Vivamus faucibus ut purus eget luctus.
        </p>
        <div className="testemonial-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>João Messias</h2>
      </div>
    </div>
  );
};

export default Testemonial;
