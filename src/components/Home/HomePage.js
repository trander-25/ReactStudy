import VideoHome from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={VideoHome} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="tittle-1">There's a better way to ask</div>
        <div className="tittle-2">
          Rejection Letter is sent to a supplier when their quotation is not
          accepted. It maintains professionalism and good business relationships
        </div>
        <div className="tittle-3">
          <button>Get's started. It's free</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
