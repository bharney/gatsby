import React from "react";
import { Link } from "gatsby";
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCoffee } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faLinkedin, faGithub, faDocker, faStackOverflow, faPaypal, faInstagram } from "@fortawesome/fontawesome-free-brands"
export class Header extends React.Component {
  render() {
    const { siteTitle } = this.props;

    return (
      <>
        <div
          style={{
            background: "rebeccapurple",
          }}
        >
          <div
            style={{
              margin: "0 auto",
              maxWidth: 760,
              padding: "1.45rem 1.0875rem"
            }}
          >
            <Link
              to="/"
              style={{
                fontSize: "2.25rem",
                padding: 0,
                fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
                fontWeight: "700",
                textRendering: "optimizeLegibility",
                lineHeight: "1.1",
                color: "white",
                textDecoration: "none"
              }}
            >
              {siteTitle}
            </Link>
          </div>
        </div>
        <div className="nav">
          <div className="nav-items">
            <ul>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
              <li>
                <Link to="work">Work</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="secondary-nav">
          <div className="nav-items secondary-nav-items">
            <ul>
              <li>
                <a href="http://www.harneybrian.com" target="_blank"><FontAwesomeIcon icon={faHome} transform="grow-6" /></a>
              </li>
              <li>
                <a href="https://www.facebook.com/brian.harney.12" target="_blank"><FontAwesomeIcon icon={faFacebook} transform="grow-6" /></a>
              </li>
              <li>
                <a href="https://twitter.com/bharney0" target="_blank"><FontAwesomeIcon icon={faTwitter} transform="grow-6" /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/porkchop.12/" target="_blank"><FontAwesomeIcon icon={faInstagram} transform="grow-6" /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/bharney0/" target="_blank"><FontAwesomeIcon icon={faLinkedin} transform="grow-6" /></a>
              </li>
              <li>
                <a href="https://github.com/bharney" target="_blank"><FontAwesomeIcon icon={faGithub} transform="grow-6" /></a>
              </li>
              <li>
                <a href="https://hub.docker.com/u/bharney0" target="_blank"><FontAwesomeIcon icon={faDocker} transform="grow-6" /></a>
              </li>
              <li>
                <a href="https://stackoverflow.com/users/4740497/bharney" target="_blank"><FontAwesomeIcon icon={faStackOverflow} transform="grow-6" /></a>
              </li>
              <li>
                <a href="https://paypal.me/BrianHarney?locale.x=en_US" target="_blank"><FontAwesomeIcon icon={faPaypal} transform="grow-6" /></a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
