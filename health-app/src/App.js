<<<<<<< HEAD
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Start from './components/start/Start';
import GetUser from './components/GetUser/GetUser';

class App extends React.Component {
=======
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

>>>>>>> origin/feature/modal-notefication-view
  render() {
    let toggleModal = () => this.setState({ modalShow: !this.state.modalShow });

    return (
<<<<<<< HEAD
     <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" render={() => <Start /> } exact />
          <Route path="/getuser" render= {() => <GetUser /> } exact /> 
        </Switch>
=======
      <div className="App">
        <Button onClick={toggleModal}>toggle</Button>
        <ModalNotificationView
          show={this.state.modalShow}
          onHide={toggleModal}
        />
>>>>>>> origin/feature/modal-notefication-view
      </div>
    </BrowserRouter>  
    );
  }
}

export default App;


