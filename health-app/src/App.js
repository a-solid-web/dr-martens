import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BrowserRouter from 'react-router-dom';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <Route path="/" render={() => <ContactsPage />} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
