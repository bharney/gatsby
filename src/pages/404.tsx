import React from "react";
import Layout from "../components/layout";
type NotFoundProps = {
  children: JSX.Element[];
  location: any;
};
export class NotFoundPage extends React.Component<NotFoundProps, {}> {
  render() {
    return (
      <Layout {...this.props}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
