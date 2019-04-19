import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/Info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < Info/>
        </header>
      </div>
    );
  }
}

export default App;
