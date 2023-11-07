import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { Squeeze as Hamburger } from "hamburger-react";
import { FiPhoneCall } from "react-icons/fi";

import "./nav.css";

const Navigation = () => {
  //   Change nav style when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  //   Navbar for mobile and tablet devices
  const [mobileNav, setMobileNavbar] = useState(false);
  const handleMobileNav = () => {
    setMobileNavbar(!mobileNav);
  };

  return (
    <nav className={color ? "nav-scroll" : ""}>
      <div className="navigation">
        <Link to="/">
          <img src={logo} alt="LQS logo" />
        </Link>
        <div className={mobileNav ? "nav-links open" : "nav-links"}>
          <Link to="/">Home</Link>
          <Link to="/team">LQS Team</Link>
          <Link to="/services">Care Services We Provide</Link>
          <Link to="/testimonials">Review</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-3 action-btns">
          <a href="tel:11111111111">
            <button className="call-btn">
              <FiPhoneCall className="call-icon" />
            </button>
          </a>
          <Link to="/contact">
            <button className="button primary-btn contact-btn">
              CONTACT US
            </button>
          </Link>
          <div className="toggle-nav-button" onClick={handleMobileNav}>
            <Hamburger size={25} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
