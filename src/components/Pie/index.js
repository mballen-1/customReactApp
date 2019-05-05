
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'Pie3D',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "caption": "Assistants to Python vs Java pass it on",
      "subCaption": "Total assistants: 11 people",
      "showValues": "1",
      "showPercentInTooltip": "0",
      "numberPrefix": "Persons: ",
      "enableMultiSlicing": "1",
      "theme": "fusion"
    },
    "data": [
      {
        "label": "Development",
        "value": "6"
      },
      {
        "label": "Applications Management",
        "value": "3"
      },
      {
        "label": "Testing",
        "value": "3"
      },
      {
        "label": "PDR",
        "value": "1"
      }
    ]
  },
};

export default class Pie extends Component {
  render() {
    return <ReactFC {...chartConfigs} />;
  }
}

ReactDOM.render(
  <Pie />,
  document.getElementById('root'),
);