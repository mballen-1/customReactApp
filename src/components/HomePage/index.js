
import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import CustomForm from './components/form';

class HomePage extends Component {
    
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
                    <CustomForm>
                    </CustomForm>
                </div>
            </div>
        );
    };
}


export default HomePage;
