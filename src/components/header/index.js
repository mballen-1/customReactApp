import React, { Component } from 'react';
import './styles.css';
import endavaLogo from '../../assets/img/Endava_Logo_white-on-transparent.png'

export default class Header extends Component {
    render () {
        return (
            <header className="App-header">
                <img src={endavaLogo} className="header__logo-size" alt="logo" />
                <h1 className="App-title">{this.props.headerText}</h1>
                <h2 className="App-title">{this.props.children}</h2>
            </header>
        );
    }
}




