import React, { Component } from 'react';
import './styles.css';
import endavaLogo from '../../assets/img/Endava_Logo_white-on-transparent.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div>
                    <img
                        src={endavaLogo}
                        className="header__logo-size"
                        alt="logo" >
                    </img>
                    <ul className="ui menu">
                        <li className="item">
                            <Link to="/">Home</Link>
                        </li>
                        
                        <li className="item">
                            <Link to="/stats/">Stats</Link>
                        </li>
                    </ul>
                </div>

                {/* <h1 className="App-title">{this.props.headerText}</h1> */}
            </header>
        );
    }
}




