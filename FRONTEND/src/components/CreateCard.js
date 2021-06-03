import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Button, Form, Row, Col, Image } from "react-bootstrap";
import { SERVER_URL, API_PATH } from "./Constants";

const CreateCard = () => {
  const [redirect, setRedirect] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState(null);
  const [imagePreview, setImagePreview] = useState("initial.jpg");

  const target = `${SERVER_URL}/${API_PATH}`;

  const handleImagePreview = (event) => {
    setImagePreview(window.URL.createObjectURL(event.target.files[0]));
    setFileName(event.target.files[0]);
  };

  const handleSubmitFile = (event) => {
    console.log({ title, description, fileName, imagePreview });
    event.preventDefault();
    setRedirect(true);
    if (fileName !== null) {
      let formData = new FormData();
      formData.append("image", fileName);
      const item = { title: title, description: description };
      formData.append("item", JSON.stringify(item));

      const init = {
        method: "POST",
        headers: {
          Accept: "application/json",
          /*
                      ,
                      'Content-Type': "multipart/form-data"
                      */
        },
        body: formData,
      };

      fetch(target, init)
        .then(() => {})
        .catch(() => {
          console.log("Error");
        });
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header appTitle="Téléchargement image" />
      <Container>
        <Row className="mb-4">
          <Col xs={12} sm={6}>
            <Image src={imagePreview} fluid />
          </Col>
          <Col xs={12} sm={6}>
            <Form>
              <Form.Group controlId="formBasicTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  autocomplete="off"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Entrer le titre de l'image"
                />
                <Form.Text className="text-muted">
                  Le titre de l image à télécharger.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicDescription">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  autocomplete="off"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Entrer la description de l image"
                />
                <Form.Text className="text-muted">
                  La description de l image à télécharger.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.File
                  id="formControlImageFile"
                  name="image"
                  label="Le fichier image a télécharger..."
                  accept="image/*,.img,.png,.jpg,.jpeg"
                  onChange={(event) => handleImagePreview(event)}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="cancel"
                onClick={() => setRedirect(true)}
              >
                Cancel
              </Button>{" "}
              <Button
                variant="primary"
                type="submit"
                onClick={(event) => handleSubmitFile(event)}
              >
                OK
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CreateCard;
