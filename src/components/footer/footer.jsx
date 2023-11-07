import "./footer.css";
import { FiTwitter, FiFacebook, FiInstagram, FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="custom-container">
      <div className="working-hours">
        <h4 className="mb-3">Working Hours</h4>
        <ul className="p-0 d-flex flex-column gap-2">
          <li>Mon - Fri: 9AM - 6PM</li>
          <li>Saturday: 9AM - 6PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
      <div className="office">
        <h4 className="mb-3">Office</h4>
        <ul className="p-0 d-flex flex-column gap-2">
          <li>United Kingdom - </li>
          <li>785 15h Street, Office 478</li>
          <li>Berlin, De 81566</li>
          <br />
          <li>
            <a href="mailto:info@lqs.com">info@lqsmail.com</a>
          </li>
        </ul>
        <div className="divider my-3"></div>
        <h4>+1 840 841 25 69</h4>
      </div>
      <div className="footer-links">
        <h4 className="mb-3">Links</h4>
        <ul className="p-0 d-flex flex-column gap-2">
          <Link to="/">
            <li>Review</li>
          </Link>
          <Link to="/">
            <li>Care Services we provide</li>
          </Link>
          <Link to="/">
            <li>LQS Team</li>
          </Link>
          <Link to="/">
            <li>Review</li>
          </Link>
          <Link to="/">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="socials">
        <h4 className="mb-3">Get in Touch</h4>
        <div className="p-0 d-flex align-items-center gap-4">
          <a href="https://facebook.com">
            <FiFacebook />
          </a>
          <a href="https://twitter.com">
            <FiTwitter />
          </a>
          <a href="https://instagram.com">
            <FiInstagram />
          </a>
          <a href="https://lqs.com">
            <FiGlobe />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
