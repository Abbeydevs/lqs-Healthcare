import "./feature.css";
import featImage from "../../images/feat-images.webp";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <div className="custom-container feat-container">
      <div className="texts">
        <small>WELCOME</small>
        <h1>We Deliver Quality Caregiving Services</h1>
        <p className="py-3">We Embrace Care and Comfort.</p>
        <p>
          At LQS HealthCare Services Ltd, we believe in providing a warm and
          nurturing environment that feels like home. Our dedicated team of
          compassionate caregivers is committed to enhancing the lives of our
          residents through personalised care and attention.
        </p>
        <Link to="/services">
          <button className="button primary-btn mt-3">WHAT WE OFFER</button>
        </Link>
      </div>
      <div className="feat-imgs">
        <img src={featImage} alt="Feature" />
      </div>
    </div>
  );
};

export default Feature;
