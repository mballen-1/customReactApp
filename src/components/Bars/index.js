
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import axios from 'axios';


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

let chartConfigs = {
    type: 'column2d',
    width: 600,
    height: 400,
    dataFormat: 'json',

    dataSource: {
        "chart": {
            "caption": "Attendance in May by discipline",
            "subCaption": "Total sessions:",
            "showValues": "1",
            "showPercentInTooltip": "0",
            "numberPrefix": "Attendances: ",
            "enableMultiSlicing": "1",
            "theme": "fusion"
        },
        "data": []
    },
};

export default class Bars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: {}
        };
        axios.get(`https://hackoholics.herokuapp.com/statistics/by-month?month=05&year=2019`,
            {})
            .then(res => {
                //console.log("res", res);
                //console.log("res.data", res.data);
                this.setData(res.data);
            })
    };

    setData(data) {
        chartConfigs.dataSource["data"] = [
            {
                "label": "Testing",
                "value": data["testing"]
            },
            {
                "label": "Applications Management",
                "value": data["applications management"]
            },
            {
                "label": "Development",
                "value": data["development"]
            },
            {
                "label": "Project management",
                "value": data["project management"]
            },
            {
                "label": "PDR",
                "value": data["people management and recruitment"]
            }

        ];
        chartConfigs.dataSource["chart"]["subcaption"] = "Total sessions " + data["total"];
    }

    render() {
        return <ReactFC {...chartConfigs} />;
    }
}

ReactDOM.render(
    <Bars />,
    document.getElementById('root'),
);