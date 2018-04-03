import React from 'react';
import './styles.css';
import Papa from './papa.jpg';
import Whatsapp from './whats.jpg';
import Tinder from './tinder.jpg';
import Telegram from './telegram.png';
import Spotify from './spotify.jpg';
import Youtube from './youtube.png';
import Backgrounds from './backgrounds.jpg';
import Low from './low.png';
import Guitar from './guitar.jpg';
import Duolingo from './duolingo.png';

import {List, Image} from 'semantic-ui-react';

function MessagesList(props) {

    const keyMap = {
        whatsapp: Whatsapp,
        papa: Papa,
        tinder: Tinder,
        telegram: Telegram,
        spotify: Spotify,
        youtube: Youtube,
        backgrounds: Backgrounds,
        low: Low,
        guitar: Guitar,
        duolingo: Duolingo,

    }

    const {messages} = props;
    const listItems = messages.map((message) =>

        <List.Item key={(message)}>
          <Image avatar src={keyMap[message[2].toString()]}/>
          <List.Content>
              <List.Header as='a'>{message[0].toString()}:</List.Header>
              <List.Description>{message[1].toString()}</List.Description>
          </List.Content>
      </List.Item>
    );
    return (
        <List animated verticalAlign='middle'>
            {listItems}
        </List>
    );
  }

export {MessagesList};