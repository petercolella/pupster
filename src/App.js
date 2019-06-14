import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Discover from './components/Discover';
import Search from './components/Search';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
