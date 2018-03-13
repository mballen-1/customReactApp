import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';

class Header extends Component {
  render () {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.headerText}</h1>
        <h2 className="App-title">{this.props.children}</h2>
      </header>
    );
  }
}

export { Header };