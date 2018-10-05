import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

export class IndexPage extends React.Component<{}, {}> {
  render() {
    return (
      <Layout>
        <h1>Hello world</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default IndexPage;
