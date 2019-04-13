import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Start from './components/start/Start';


class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" render={() => <Start /> } exact />
        </Switch>
      </div>
    </BrowserRouter>  
    );
  }
}

export default App;


