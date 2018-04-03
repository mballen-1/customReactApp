import React, { Component } from 'react';
import './App.css';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {Header, MessagesList} from './components/common';
import { Button } from 'semantic-ui-react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      text: '',
      displayNotifications: false,
      numbers: [],
      messages:[["Papá", "Lo estoy esperando!" , "papa"], ["Tinder" , "You have a new match!","tinder"], ["Telegram" ," Bienvenido!","telegram"],
          ["Spotify", " beethoven 5th","spotify"], ["Youtube" , "See new Linkin Park video!","youtube"], ["Backgrounds", "New backgrounds added","backgrounds"],
      ["Alert", "Low battery", "low"], ["Guitar tabs"," Metallica nothing else matters","guitar"], ["Duolingo", "Keep practicing!","duolingo"]
        ],
      notifications:[],
    };
  };

  pushNotification = (notificationNumber) =>{
    const {notifications} = this.state;
    notifications.unshift(this.state.messages[notificationNumber-1]);
    this.setState({notifications:notifications});
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value});
  };

  toggleNotifications = () => {
    this.setState({displayNotifications: !this.state.displayNotifications});
  };

  addNumber = () => {
    const {numbers} = this.state;
    let toadd = this.state.text;
    numbers.push(toadd);
    this.setState({numbers: numbers});
    this.setState({text:''});
    console.log(this.state.text);
  };

  clearNumbers = () => {
    this.setState({numbers : []});
  }

  clearNotifications = () => {
        this.setState({notifications : []});
        this.toggleNotifications();
  }

  render() {

    const {displayNotifications} = this.state;
    let notifications = null;
    let toggleNotificationsMessage = '';

    if(displayNotifications) {
      notifications = <MessagesList messages={this.state.notifications}/>;
      toggleNotificationsMessage= 'Hide Notifications';
    } else {
      toggleNotificationsMessage= 'Show Notifications';
    }

    return (
      <div className="App">
        <Header headerText={'Welcome to React'}>  </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <input onChange={this.handleChange} value={this.state.text} />
        <br />


        <Button primary onClick={this.addNumber}>
          Add new number
        </Button>
        <Button secondary onClick={this.clearNumbers}>
                    Clear list of numbers
        </Button>
        <Sparklines data={this.state.numbers} limit={10} width={200} height={25} margin={10}>
            <SparklinesLine color="blue" />
        </Sparklines>
          <br/>
          <br/>

          <Button onClick={() => this.pushNotification(1)}>
              Save Message 1
          </Button>
          <Button onClick={() => this.pushNotification(2)}>
              Save Message 2
          </Button>
          <Button onClick={() => this.pushNotification(3)}>
              Save Message 3
          </Button>
          <br/>
          <Button onClick={() => this.pushNotification(4)}>
              Save Message 4
          </Button>
          <Button onClick={() => this.pushNotification(5)}>
              Save Message 5
          </Button>
          <Button onClick={() => this.pushNotification(6)}>
              Save Message 6
          </Button>
          <br/>
          <Button onClick={() => this.pushNotification(7)}>
              Save Message 7
          </Button>
          <Button onClick={() => this.pushNotification(8)}>
              Save Message 8
          </Button>
          <Button onClick={() => this.pushNotification(9)}>
              Save Message 9
          </Button>


          <br/>
          <br/>

            {notifications}
          <Button primary onClick={this.toggleNotifications}>
                {toggleNotificationsMessage}
           </Button>
          <Button secondary onClick={this.clearNotifications}>
              Clear Notifications
          </Button>

      </div>
    );
  };
}


export default App;
