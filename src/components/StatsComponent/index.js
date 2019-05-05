
import React, { Component } from 'react';
import './App.css';
import { MessagesList } from './components/common';
import Header from './components/header';
import Pie from './components/Pie';
import Bars from './components/Bars';
import CustomForm from './components/form';

class Stats extends Component {
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
                <div>
                    <div className="app__chartColumn-width app__chartColumn-display" >
                        <Pie></Pie>
                    </div>
                    <div className="app__chartColumn-width app__chartColumn-display">
                        <Bars></Bars>
                    </div>
                </div>
            </div>
        );
    };
}


export default Stats;
