import VideoHome from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
  return (
    <div className="hompage-container">
      <video autoPlay muted loop>
        <source src={VideoHome} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
