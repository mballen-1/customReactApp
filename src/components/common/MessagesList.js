import React from 'react';
import './styles.css';

function MessagesList(props) {

    const {messages} = props;
    const listItems = messages.map((message) =>
      <li className="itemStyle" key={(message)}>
        {message}
      </li>
    );
    return (
      <ul className="MessagesList">{listItems}</ul>
    );
  }

export { MessageList };