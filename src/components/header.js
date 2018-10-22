import React from "react";
import { Link } from "gatsby";

// type HeaderProps = {
//   siteTitle: string;
// };

export class Header extends React.Component {
  render() {
    const { siteTitle } = this.props;

    return (
      <div
        style={{
          background: "rebeccapurple",
          marginBottom: "1.45rem"
        }}
      >
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
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
    );
  }
}

export default Header;
