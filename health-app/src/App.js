import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Start from './components/start/Start';
import GetUser from './components/GetUser/GetUser';
import auth from "solid-auth-client";

class App extends React.Component {
  async login() {
    const session = await auth.currentSession();
    if (!session) {
      await auth.login("https://solid.community");
    } else {
      this.setState({
        webId: session.webID
      });
    }
  }

  render() {
    let toggleModal = () => this.setState({ modalShow: !this.state.modalShow });

    return (
     <BrowserRouter>
      <div>
        <Navigation login={this.login.bind(this)}/>
        <Switch>
          <Route path="/" render={() => <Start /> } exact />
          <Route path="/getuser" render= {() => <GetUser /> } exact /> 
        </Switch>
      </div>
    </BrowserRouter>  
    );
  }
}

export default App;


