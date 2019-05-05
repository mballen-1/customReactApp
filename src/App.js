
import React, { Component } from 'react';
import './App.css';
import { MessagesList } from './components/common';
import Header from './components/header';
import Pie from './components/Pie';
import Bars from './components/Bars';
import CustomForm from './components/form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      text: '',
      displayNotifications: false,
      numbers: [2, 4, 6, 2, 4, 6],
      data: {},
      messages: [
        ["Papá", "Lo estoy esperando!", "papa"],
        ["Tinder", "You have a new match!", "tinder"],
        ["Telegram", " Bienvenido!", "telegram"],
        ["Spotify", " beethoven 5th", "spotify"],
        ["Youtube", "See new Linkin Park video!", "youtube"],
        ["Backgrounds", "New backgrounds added", "backgrounds"],
        ["Alert", "Low battery", "low"],
        ["Guitar tabs", " Metallica nothing else matters", "guitar"],
        ["Duolingo", "Keep practicing!", "duolingo"]
      ],
      notifications: [],
    };
  };

  pushNotification = (notificationNumber) => {
    const { notifications } = this.state;
    notifications.unshift(this.state.messages[notificationNumber - 1]);
    this.setState({ notifications: notifications });
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  toggleNotifications = () => {
    this.setState({ displayNotifications: !this.state.displayNotifications });
  };

  addNumber = () => {
    const { numbers } = this.state;
    let toadd = this.state.text;
    numbers.push(toadd);
    this.setState({ numbers: numbers });
    this.setState({ text: '' });
    console.log(this.state.text);
  };

  clearNumbers = () => {
    this.setState({ numbers: [] });
  }

  clearNotifications = () => {
    this.setState({ notifications: [] });
    this.toggleNotifications();
  }

  render() {

    const { displayNotifications } = this.state;
    let notifications = null;
    let toggleNotificationsMessage = '';

    // if (displayNotifications) {
    notifications = <MessagesList messages={this.state.notifications} />;
    //   toggleNotificationsMessage = 'Hide Notifications';
    // } else {
    //   toggleNotificationsMessage = 'Show Notifications';
    // }

    return (
      <div className="App">

        <Header
          headerText={'Pass It On Stats'}>
        </Header>
        <div>
          <CustomForm>
          </CustomForm>
        </div>

        <div>
          <div className="app__chartColumn-width app__chartColumn-display" >
            <Pie></Pie>
          </div>
          <div className="app__chartColumn-width app__chartColumn-display">
            <Bars></Bars>
          </div>
        </div>


        <br />
        <br />

        
        <br />
        <br />

        {notifications}

        {/* <Button
          primary
          onClick={this.toggleNotifications}>
          {toggleNotificationsMessage}
        </Button> */}

      </div>
    );
  };
}


export default App;
