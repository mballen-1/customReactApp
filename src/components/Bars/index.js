
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
    type: 'column2d',
    width: 600,
    height: 400,
    dataFormat: 'json',

    dataSource: {
        "chart": {
            "caption": "Pass it ons during May by discipline",
            "subCaption": "Total sessions: 15",
            "showValues": "1",
            "showPercentInTooltip": "0",
            "numberPrefix": "Sesions: ",
            "enableMultiSlicing": "1",
            "theme": "fusion"
        },
        "data": [
            {
                "label": "Testing",
                "value": "5"
            },
            {
                "label": "Applications Management",
                "value": "6"
            },
            {
                "label": "Development",
                "value": "3"
            },
            {
                "label": "Project management",
                "value": "2"
            },
            {
                "label": "PDR",
                "value": "1"
            }
        ]
    },
};

export default class Bars extends Component {
    render() {
        return <ReactFC {...chartConfigs} />;
    }
}

ReactDOM.render(
    <Bars />,
    document.getElementById('root'),
);