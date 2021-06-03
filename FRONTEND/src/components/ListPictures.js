import React from "react";
import { Container, Row } from "react-bootstrap";

class ListPictures extends React.Component {
  render() {
    return (
      <div className="box">
        <Container fluid>
          <Row>
            {this.props.items.map((item) => (
              <div className="col-xl-3 col-md-6 mb-4" key={item._id}>
                <div className="card border-0 shadow">
                  {
                    <a href={"/cards/" + item._id}>
                      <img
                        src={this.props.serverUrl + item.imageUrl}
                        className="card-img-top fixeds"
                        alt="..."
                      />
                    </a>
                  }
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">{item.title}</h5>
                    <div className="card-text text-black-50">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ListPictures;
