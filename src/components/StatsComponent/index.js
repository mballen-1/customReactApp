
import React, { Component } from 'react';
import './styles.css';
import Pie from '../Pie';
import Bars from '../Bars';


class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {

        return (
            <div>
                <div className="app__chartColumn-width app__chartColumn-display" >
                    <Pie></Pie>
                </div>
                <div className="app__chartColumn-width app__chartColumn-display">
                    <Bars></Bars>
                </div>
            </div>
        );
    };
}


export default Stats;
