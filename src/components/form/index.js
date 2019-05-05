import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './styles.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import faker from 'faker'
import _ from 'lodash'
import { Select } from 'semantic-ui-react'

// const countryOptions = _.map(faker.definitions.address.country, country => ({
//   key: country,
//   text: country,
//   value: country,
// }))

const disciplineOptions = [
    {
        key: 'Project Management',
        text: 'Project Management',
        value: 'Project Management'
    },
    {
        key: 'Development',
        text: 'Development',
        value: 'Development'
    },
    {
        key: 'Applications Management',
        text: 'Applications Management',
        value: 'Applications Management'
    },
    {
        key: 'Testing',
        text: 'Testing',
        value: 'Testing'
    },
    {
        key: 'People Development & Recruitment',
        text: 'People Development & Recruitment',
        value: 'People Development & Recruitment'
    }
]

export default class CustomForm extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            title: '',
            name: '',
            discipline: '   ',
            abstract: '',
            date: moment()._d,
            image: '',
            hour: '12:00'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDisciplineChange = this.handleDisciplineChange.bind(this);
        this.handleAbstractChange = this.handleAbstractChange.bind(this);
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    
    handleTitleChange(event) {
        this.setState({
            title: event.target.value,
        });
    }

    handleDisciplineChange(discipline) {
        this.setState({
            discipline: discipline, 
        });
    }

    handleAbstractChange(event) {
        this.setState({
            abstract: event.target.value,
        });
    }

    handleImgChange(event) {
        this.setState({
            image: event.target.value,
        });
    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [day, month, year].join('/');
    }

    resetState() {
        this.setState({
            title: '',
            name: '',
            abstract: '',
            date: moment()._d,
            image: '',
            hour: '12:00',
            discipline: ''
        });
    }

    handleSubmit(event) {
        alert('A pass it on was submitted: ' + this.state);
        event.preventDefault();
        console.log("this.state", this.state);

        let currentState = this.state;
        let currentDate = currentState.date;
        currentState.date =  this.formatDate(currentDate);

        axios.post(`https://hackoholics.herokuapp.com/passitons`, 
        currentState )
            .then(res => {
                console.log("res", res);
                console.log("res.data", res.data);
                this.resetState();
                console.log("this.state after", this.state);
            })

    }

    handleChange(date) {
        // console.log("date", date)
        this.setState({
            date: date
        })
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value,
        });
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     let main = this.state.date
    //     console.log(main.format('L'));
    // }


    render() {
        return (
            <div className="form__container-margin">
                <h4>
                    Set the new pass it on information
                </h4>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <div className="ui input">
                            <input
                                type="text"
                                value={this.state.title}
                                onChange={this.handleTitleChange}
                                placeholder="title"
                            />
                        </div>
                    </label>
                    <label>
                        Presenter:
                        <div className="ui input">
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                placeholder="Presenter"
                            />
                        </div>
                    </label>
                    <label>
                        Discipline:
                        {/* <Input
                            list='languages'
                            placeholder="Select presenter's discipline"
                            // onChange={this.handleDisciplineChange}
                        /> */}
                        <Select 
                            placeholder="Select presenter's discipline" 
                            options={disciplineOptions}
                            onChange={(e, { value }) => this.handleDisciplineChange(value)}
                        />
                    </label>
                    <label>
                        Abstract:
                        <div className="ui input form__abstract-size">
                            <input
                                type="text"
                                value={this.state.abstract}
                                onChange={this.handleAbstractChange}
                                placeholder="Add abstract here..."
                            />
                        </div>
                    </label>
                    <label>
                        Date:
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.handleChange}
                            name="date"
                            dateFormat="MM/DD/YYYY"
                        />
                    </label>
                    <label>
                        Image URL:
                        <div className="ui input">
                            <input
                                type="text"
                                value={this.state.image}
                                onChange={this.handleImgChange}
                                placeholder="Place img url"
                            />
                        </div>
                    </label>
                </form>
                <Button
                    className="form__button-margin"
                    primary
                    onClick={this.handleSubmit}>
                    Confirm & Schedule
                    <Link to='/stats'></Link>
                </Button>
            </div >
        );
    }
}

