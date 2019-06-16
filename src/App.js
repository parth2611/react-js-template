import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Home';
import About from './About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          </ul>

        <hr />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </div >
    );
  }
}
export default App;
