import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/'><News pageSize={5} country='in' category='general' /></Route>
            <Route path='/business'><News pageSize={5} country='in' category='business' /></Route>
            <Route path='/entertainment'><News pageSize={5} country='in' category='entertainment' /></Route>
            <Route path='/general'><News pageSize={5} country='in' category='general' /></Route>
            <Route path='/health'><News pageSize={5} country='in' category='health' /></Route>
            <Route path='/science'><News pageSize={5} country='in' category='science' /></Route>
            <Route path='/sports'><News pageSize={5} country='in' category='sports' /></Route>
            <Route path='/technology'><News pageSize={5} country='in' category='technology' /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
