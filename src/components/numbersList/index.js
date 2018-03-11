import React from 'react';
import './styles.css';

export default function NumbersList(props) {
    const {numbers, multiplier} = props;
    const listItems = numbers.map((number) =>
      <li key={(number).toString()}>
        {number * multiplier}
      </li>
    );
    return (
      <ul className="NumbersList">{listItems}</ul>
    );
  }