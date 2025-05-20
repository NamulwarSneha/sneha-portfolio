import React, { Component } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <img
            src="https://racharlasrikanth.netlify.app/static/media/logo.aa78497e534416d460cb8eac1661bee4.svg"
            alt="logo-home navbar-logo"
          />

          <div className="menu-icon" onClick={this.toggleMenu}>
            <i className={this.state.isOpen ? "fas fa-times" : "fas fa-bars"}>
              <GiHamburgerMenu />
            </i>
          </div>
          <ul
            onClick={this.toggleMenu}
            className={this.state.isOpen ? "nav-menu active" : "nav-menu"}
          >
            <li className="nav-item">
              <a href="/" className="nav-links">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-links">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/Projects" className="nav-links">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a href="/LearnWithme" className="nav-links">
                LearnWithMe
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;