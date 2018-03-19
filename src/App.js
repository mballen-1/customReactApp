import React, { Component } from 'react';
import './App.css';
import { Sparklines, SparklinesLine } from 'react-sparklines';


// import Header from './components/header';
// import Button from './components/button';
// import Clock from './components/clock';
// import NumbersList from './components/numbersList'

import {Header, Button, Clock, NumbersList} from './components/common';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      text: '',
      displayClock: false,
      numbers: [2,4 ,16 ,7],
    };
  };

  addOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value});
  };

  toggleClock = () => {
    this.setState({displayClock: !this.state.displayClock});
  };

  addNumber = () => {
    const {numbers} = this.state;
    numbers.push(numbers.length);
    this.setState({numbers: numbers});
  };

  clear = () => {
    this.setState({numbers : []});
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
        <br />
        <input onChange={this.handleChange} value={this.state.text} />
        <br />
        <h3>{this.state.text}</h3>
        {clock}
        <Button action={this.toggleClock}>
          {toggleClockMessage}
        </Button>
        <Button action={this.addNumber}>
          Add new number
        </Button>
        <Sparklines data={this.state.numbers} limit={10} width={400} height={10} margin={1}>
                    <SparklinesLine color="blue" />
        </Sparklines>
        <Button action={this.clear}>
            Clear list
        </Button>

        <NumbersList numbers={this.state.numbers} multiplier={1} />
        <NumbersList numbers={this.state.numbers} multiplier={3} />

      </div>
    );
  };
}

export default App;
