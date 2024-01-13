import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<News pageSize={5} country='in' category='general' />} />
            <Route exact path='/business' element={<News pageSize={5} country='in' category='business' />} />
            <Route exact path='/entertainment' element={<News pageSize={5} country='in' category='entertainment' />} />
            <Route exact path='/general' element={<News pageSize={5} country='in' category='general' />} />
            <Route exact path='/health' element={<News pageSize={5} country='in' category='health' />} />
            <Route exact path='/science' element={<News pageSize={5} country='in' category='science' />} />
            <Route exact path='/sports' element={<News pageSize={5} country='in' category='sports' />} />
            <Route exact path='/technology' element={<News pageSize={5} country='in' category='technology' />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
