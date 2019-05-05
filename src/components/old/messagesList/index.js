import React from 'react';
import './styles.css';

export default function NumbersList(props) {

    const {messages} = props;
    const listItems = message.map((message) =>
      <li className="itemStyle" key={(message)}>
        {message}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }