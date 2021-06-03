import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import ListPictures from "./ListPictures";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header appTitle="Photos de mon album..." />
        <ListPictures
          items={this.props.items}
          serverUrl={this.props.serverUrl}
        />
        <Footer />
      </>
    );
  }
}

export default Home;
