import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BrowserRouter from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation login={this.login.bind(this)} webId={this.state.webId} />
            <Route path="/" render={() => <ContactsPage />} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
