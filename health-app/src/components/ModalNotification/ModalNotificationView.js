import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";

const ModalNotificationView = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View access to your vaccination certificate
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col lg="1" />
            <Col
              lg="5"
              style={{
                padding: "5%",
                backgroundColor: "rgb(248, 248, 248)",
                borderRadius: "8px",
                marginRight: "10px"
              }}
            >
              <Row>
                <h4 style={{ color: "#3256D7" }}>General Information</h4>
              </Row>
              <Row>
                <Col lg="1" />
                <Col lg="5">Request from:</Col>
                <Col lg="5">Dr. Martens</Col>
                <Col lg="1" />
              </Row>
              <Row>
                <Col lg="1" />
                <Col lg="5">Date of Request:</Col>
                <Col lg="5">1.1.2019</Col>
                <Col lg="1" />
              </Row>
              <Row>
                <Col lg="1" />
                <Col lg="5">Expiration Date:</Col>
                <Col lg="5">2.1.2019</Col>
                <Col lg="1" />
              </Row>
              <Row>
                <Col lg="1" />
                <Col lg="5">Type of Information:</Col>
                <Col lg="5">Health Data</Col>
                <Col lg="1" />
              </Row>
              <Row>
                <Col lg="1" />
                <Col lg="5">Source:</Col>
                <Col lg="5">Medical Platform</Col>
                <Col lg="1" />
              </Row>
              <Row>
                <Col lg="1" />
                <Col lg="5">Intent:</Col>
                <Col lg="5">Data Analysis</Col>
                <Col lg="1" />
              </Row>
            </Col>
            <Col
              lg="5"
              style={{
                padding: "5%",
                backgroundColor: "rgb(248, 248, 248)",
                borderRadius: "8px",
                marginLeft: "10px"
              }}
            >
              <Row>
                <h4 style={{ color: "#3256D7" }}>Possible Risks: </h4>
              </Row>
              <Row>
                <p style={{ color: "#333131" }}>
                  By giving consent to this permission request I am aware that
                  there might be:{" "}
                </p>
              </Row>
              <Row>
                <Col lg="1" />
                <Col lg>
                  <li>Legal Risks</li>
                </Col>
                <Col lg="1" />
              </Row>
              <Row>
                <Col lg="1" />
                <Col lg>
                  <li>Economic Risks</li>
                </Col>
                <Col lg="1" />
              </Row>
              <Row>
                <Col lg="1" />
                <Col lg>
                  <li>Financial Risks</li>
                </Col>
                <Col lg="1" />
              </Row>
              <Row>
                <Col lg="1" />
                <Col lg>
                  <li>Ecological Risk</li>
                </Col>
                <Col lg="1" />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: "3", offset: "3" }}>
              <Button style={{ backgroundColor: "red" }} onClick={props.onDeny}>Deny request</Button>
            </Col>
            <Col lg={{ span: "3", offset: "3" }}>
              <Button
                style={{ backgroundColor: "green" }}
                onClick={props.onAccept}
              >
                Accept request
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNotificationView;
