import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Button from './components/button';
import Clock from './components/clock';
import NumbersList from './components/numbersList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0, displayClock: false, numbers: [0, 1, 2, 3]};
  };

  addOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  toggleClock = () => {
    this.setState({displayClock: !this.state.displayClock});
  };

  addNumber = () => {
    const {numbers} = this.state;
    numbers.push(numbers.length);
    this.setState({numbers: numbers});
  }

  render() {
    const {displayClock} = this.state;
    let clock = null;
    let toggleClockMessage = '';
    if(displayClock) {
      clock =<Clock />;
      toggleClockMessage = 'Hide Clock';
    } else {
      toggleClockMessage = 'Show Clock';
    }

    return (
      <div className="App">
        <Header headerText={'Welcome to React by props'}> Welcome by children </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button action={this.addOne}>
          +1
        </Button>
        <p>
          {this.state.counter}
        </p>
        {clock}
        <Button action={this.toggleClock}>
          {toggleClockMessage}
        </Button>
        <Button action={this.addNumber}>
          Add new number
        </Button>
        <NumbersList numbers={this.state.numbers} multiplier={1} />
        <NumbersList numbers={this.state.numbers} multiplier={2} />
      </div>
    );
  };
}

export default App;
