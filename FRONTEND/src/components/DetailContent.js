/* eslint-disable react/prop-types */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class DetailContent extends React.Component {
  render() {
    let imageUrl = this.props.serverUrl + this.props.item.imageUrl;

    let imageStyle = {
      height: "100vh",
      minHeight: "500px",
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "noRepeat",
    };

    return (
      <>
        <Header appTitle="Photos de mon album..." />
        <header style={imageStyle}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                <h1 className="font-weight-light">{this.props.item.title}</h1>
                <p className="lead">{this.props.item.description}</p>
              </div>
            </div>
          </div>
        </header>
        <Footer />
      </>
    );
  }
}

export default DetailContent;

/*
        <div className="container">
              <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-0 card-img-top shadow" style={imageStyle}>
                    <div className="card-body text-center">
                      <h5 className="card-title mb-0">{this.props.item.title}</h5>
                      <div className="card-text text-black-50">{this.props.item.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
*/
/*
<img src="https://source.unsplash.com/TMgQMXoglsM/500x350" class="card-img-top" alt="...">
<div className="align-items-center" style={imageStyle}>         
                <div className="col-12 text-center">
                  <h1 className="font-weight-light">{this.props.item.title}</h1>
                  <p className="lead">{this.props.item.description}</p>
                </div>
            </div>
*/
