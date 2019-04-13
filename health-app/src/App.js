import React, { Component } from "react";
import "./App.css";
import ModalNotificationView from "./components/ModalNotificationView";
import Button from "react-bootstrap/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
  }

  render() {
    let toggleModal = () => this.setState({ modalShow: !this.state.modalShow });

    return (
      <div className="App">
        <Button onClick={toggleModal}>toggle</Button>
        <ModalNotificationView
          show={this.state.modalShow}
          onHide={toggleModal}
        />
      </div>
    );
  }
}

export default App;
