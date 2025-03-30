import VideoHome from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="tittle-1">There's a better way to ask</div>
        <div className="tittle-2">
          Rejection Letter is sent to a supplier when their quotation is not
          accepted. It maintains professionalism and good business relationships
        </div>
        <div className="tittle-3">
          {isAuthenticated === false ? (
            <button onClick={() => navigate("/login")}>
              Get's started. It's free
            </button>
          ) : (
            <button onClick={() => navigate("/users")}>Doing Quiz Now</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
