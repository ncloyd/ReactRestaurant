import React, { Component } from 'react';
import './App.css';
import HomePage from './containers/Home.jsx';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HomePage />
            <h1 className='App-title'>Welcome to React</h1>
       </div>
    );
  }
}

export default App;
