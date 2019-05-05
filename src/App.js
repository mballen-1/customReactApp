
import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/Main/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  };

  render() {

    return (
      <div className="App">

        <Header
          headerText={'Pass It On Stats'}>
        </Header>
        <Main />

      </div>
    );
  };
}


export default App;
