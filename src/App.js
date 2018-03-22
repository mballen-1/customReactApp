import React, { Component } from 'react';
import './App.css';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {Header, Button, Clock, NumbersList} from './components/common';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      text: '',
      displayClock: false,
      numbers: [],
      messages:[ " Papá: Lo estoy esperando!", "Tinder: Keep swipping champion", "Telegram: Bienvenido!",
            "Spotify: beethoven 5th", "Youtube: See new Linkin Park video!", "Backgrounds: New backgrounds added",
            "Low battery", "Guitar tabs: Metallica nothing else matters", "Welcome to Duolingo!"
        ],
      notifications:[],
    };
  };

  pushNotification = (notificationNumber) =>{
    let notification = this.state.messages[notificationNumber-1];
    this.state.notifications.push(notification);
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value});
  };

  toggleClock = () => {
    this.setState({displayClock: !this.state.displayClock});
  };

  addNumber = () => {
    const {numbers} = this.state;
    let toadd = this.state.text;
    numbers.push(toadd);
    this.setState({numbers: numbers});
    this.state.text='';
    console.log(this.state.text);
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
        <Header headerText={'Welcome to React motherfucker'}>  </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <input onChange={this.handleChange} value={this.state.text} />
        <br />
        <h3>{this.state.text}</h3>

        <Button action={this.addNumber}>
          Add new number
        </Button>
        <Button action={this.clear}>
                    Clear list
                </Button>
        <Sparklines data={this.state.numbers} limit={10} width={200} height={25} margin={10}>
                    <SparklinesLine color="blue" />
        </Sparklines>

          <br/>
            <br/>
          <Button action={this.pushNotification(1)}>
              Save Message 1
          </Button>

          <Button >
              Save Message 2
          </Button>
          <Button >
              Save Message 3
          </Button>
          <br/>
          < Button>
              Save Message 4
          </Button>
          <Button>
              Save Message 5
          </Button>
          <Button>
              Save Message 6
          </Button>
          <br/>
          <Button>
              Save Message 7
          </Button>
          <Button>
              Save Message 8
          </Button>
          <Button>
              Save Message 9
          </Button>
          <br/>
          <br/>
          <Button action={this.displayClock}>
              Display messages
          </Button>
          <NumbersList numbers={this.state.numbers} multiplier={1} />


      </div>
    );
  };
}

export default App;
