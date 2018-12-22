import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Tabs from './components/Tabs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Tabs />
      </div>
    );
  }
}

export default App;
