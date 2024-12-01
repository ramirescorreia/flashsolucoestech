import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faRocket, faGlobe } from "@fortawesome/free-solid-svg-icons";
const Work = () => {
  const workInfoData = [
    {
      image: <FontAwesomeIcon icon={faGlobe} />,
      title: "Donec ullamcorper, lorem et",
      text: "porta egestas, orci purus fermentum eros, in interdum est lorem nec nisi. Mauris a tortor quis neque volutpat bibendum.",
    },
    {
      image: <FontAwesomeIcon icon={faRocket} />,
      title: "Proin id est ut magna",
      text: "Nunc comodo massa nisl, e sempre velit luctus rhoncus. Maecenas convallis nulla vitae risus aucto",
    },
    {
      image: <FontAwesomeIcon icon={faBolt} />,
      title: "Vestibulum dictum",
      text: "uspendisse ultrices ultrices lacus id ultrices. Etiam ultrices laoreet nunc",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nosso Trabalho</p>
        <h1>Cras eros sem</h1>
        <p className="primary-text">
          consectetur vitae arcu vel, pharetra sagittis turpis. Vestíbulo eu
          mattis mauris, Curabitur sollicitudin efficitur sapien blandit
          volutpat. Ut ultrices scelerisque justo, non euismod arcu.
        </p>
      </div>

      <div className="work-section-botton">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container"> {data.image}</div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
