import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";
import { rhythm } from "../utils/typography";

// type LayoutProps = any;
// type LayoutProps = {
//   children: JSX.Element[];
//   location: any;
// };
export class Layout extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" }
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main
              role="main"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
              }}
            >
              {this.props.children}
            </main>
            <Footer siteTitle={data.site.siteMetadata.title} />
          </>
        )}
      />
    );
  }
}

export default Layout;
