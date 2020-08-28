import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import axios from "axios";

const id = Math.random();
class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome!!")
  }

  handleNewUserMessage(message) {
    axios.post("https://fawn-zebra-5778.twil.io/chat", {
      message,
      id
    }).then((response) => {
      response.data.response.says.forEach((say) => {
        addResponseMessage(say.text)
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Widget handleNewUserMessage={this.handleNewUserMessage} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
