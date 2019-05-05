import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import './styles.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class CustomForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            abstract: '',
            startDate: moment()._d,
            imageUrl:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDisciplineChange = this.handleDisciplineChange.bind(this);
        this.handleAbstractChange = this.handleAbstractChange.bind(this);
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // console.log("moment()" ,moment());
    }

    disciplineOptions = [
        {
            key: 'Project Management',
            text: 'Project Management',
            value: 0
        },
        {
            key: 'Development',
            text: 'Development',
            value: 1
        },
        {
            key: 'Applications Management',
            text: 'Applications Management',
            value: 2
        },
        {
            key: 'Testing',
            text: 'Testing',
            value: 3
        }
    ]
    handleTitleChange(event) {
        this.setState({ 
            title: event.target.value, 
        });
    }

    handleDisciplineChange(event) {
        console.log("event" ,event)
        this.setState({ 
            // discipline: event.target.value, 
        });
    }

    handleAbstractChange(event) {
        this.setState({ 
            abstract: event.target.value,
        });
    }

    handleImgChange(event) {
        this.setState({ 
            imageUrl: event.target.value,
         });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleChange(date) {
        console.log("date", date)
        this.setState({
            startDate: date
        })
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     let main = this.state.startDate
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
                        Discipline:
                        <Input 
                            list='languages' 
                            placeholder="Select presenter's discipline"
                            onChange={this.handleDisciplineChange}
                            />
                        <datalist id='languages'>
                            <option value='Testing' />
                            <option value='Applications Management' />
                            <option value='Development' />
                        </datalist>
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
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            name="startDate"
                            dateFormat="MM/DD/YYYY"
                        />
                    </label>
                    <label>
                        Image:
                        <div className="ui input">
                            <input 
                                type="text" 
                                value={this.state.value} 
                                onChange={this.handleImgChange} 
                                placeholder="Place img url"
                            />
                        </div>
                    </label>
                </form>
                <Button
                    primary
                    onClick={this.handleSubmit}>
                    Confirm & Schedule
                </Button>
            </div >
        );
    }
}

