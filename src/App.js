import React, { Component } from 'react';
import ToDoList from './TodoList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Test Welcome to React in Glitch</h2>
        </div>

        <ToDoList/>
      </div>
    );
  }
}

export default App;
