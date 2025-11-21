import React from "react";
import "./Header.css";
import { click } from "@testing-library/user-event/dist/click";
import { useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //Check if the current page is the home page;
  const isHomePage = location.pathname === "/";

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
              <div className="logo-icon">
                <span className="logo-arrow">$</span>
              </div>
              <span className="logo-text">MyJob.com</span>
            </div>
          </div>
          <nav className="header-nav">
            <div className="nav-item-with-dropdown">
              <a href="#jobs" className="nav-link">
                Jobs
              </a>
            </div>
            <div className="nav-item-with-dropdown">
              <a href="#companies" className="nav-link">
                Companies
              </a>
            </div>
            <div className="nav-item-with-dropdown">
              <a href="#services" className="nav-link">
                Services
              </a>
            </div>
          </nav>
          <div className="header-right">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
            <div className="header-divider"></div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
