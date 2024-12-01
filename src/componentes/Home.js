import Navbar from "./NavBar";
import BannerImage from "../imagens/banner.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container"></div>
        <div className="home-text-section">
          <h1 className="primary-heading">Lorem ipsum dolor sit amet</h1>
          <p className="primary-text">
            Phasellus fringilla ligula et lectus hendrerit, sed mattis Tellus
            aliquam. Dito inteiro erat velit, facilisis hendrerit eros comodo
            molestie. Nada fácil. Nullam nulla arcu, placerat nec sempre sed,
            euismod ac dui.
          </p>
          <button className="secondary-button">
            Fale no whatsapp <FiArrowRight />
          </button>
          <p className="primary-text">
            Nulla ut ligula vel libero condimentum accumsan nec ac sem. Integer
            molestie sed mauris eu consectetur.
          </p>
        </div>
        <div className="home-image-section">
          <div className="home-primary-image">
            <img src={BannerImage} alt="flash" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
