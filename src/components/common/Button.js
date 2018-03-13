import React from 'react';

function Button(props) {
  return (
    <button onClick={props.action}>
      {props.children}
    </button>
  )
}

export { Button };