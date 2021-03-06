import React from "react";
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rhythm } from "../utils/typography";

// type FooterProps = {
//   siteTitle: string;
// };

export class Header extends React.Component {
  render() {
    const { siteTitle } = this.props;

    return (
      <footer style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: rhythm(24),
        textAlign: "center"
      }}>
        <p><strong>Made with <FontAwesomeIcon style={{maxWidth: rhythm(.65)}} icon={faHeart} size="1x" /> by {siteTitle}</strong></p>
      </footer>
    );
  }
}

export default Header;
