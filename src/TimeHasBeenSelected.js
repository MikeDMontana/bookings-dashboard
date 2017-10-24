import React, { Component } from 'react';
import * as d3 from 'd3';

const data = [
{town: 'Macondo', pop: 24},
{town: 'Wonderland', pop: 47},
{town: 'Oz', pop: 66},
{town: 'Gondor', pop: 17}
];

// define dimensions of svg
const svgWidth = 500;  // width of entire svg
const svgHeight = 500; // height of svg
const textWidth = 115; // width of text section
const textGutter = 7; // text/bar spacing
const barMargin = 2; // bottom margin for bars
const defaultColor = '#6497ea'; // default bar color
const altColor = '#bc4545'; // alternative bar color

// any population larger than this is considered big
const popThreshold = 50;

const barHeight = 40;


class TimeHasBeenSelected extends Component {

  // Get scales using d3 linear scales
  xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([textWidth, svgWidth - textWidth]);

  yScale = d3.scaleLinear()
      .domain([0, 10])  //instead of 10, this was this.props.dayOfWeekArr.length
      .range([0, svgHeight]);

  // get bar height
  renderBar = (datum, index) => {
    // props for town name
    const textProps = {
      x: textWidth - textGutter,
      y: this.yScale(index) + barMargin + barHeight / 2,
      textAnchor: 'end',
    };

    // props for population bars
    const barProps = {
      x: textWidth,
      y: this.yScale(index),
      width: this.xScale(datum['Average Capacity']),
      height: barHeight,
      fill: datum['Average Capacity'] < popThreshold
                ? defaultColor
                : altColor,
      rx: 5,
      ry: 5,
    };

    // props for numbers on end
    const numberProps = {
      x: textWidth + this.xScale(datum['Average Capacity']) - textGutter,
      y: this.yScale(index) + barMargin + barHeight / 2,
      textAnchor: 'end',
    };
    console.log(this.xScale(datum['Average Capacity']));

    // Be way of making changes below here!
    return (
    <g key={index}>
        <text {...textProps}>text here</text>
        <rect {...barProps}/>
        <text {...numberProps}>{datum['Average Capcity']}</text>
    </g>
    );
  }; // end of renderBar function


// function to render a bar for given element of dayOfWeekArr array
  render() {
    console.log(this.props.dayOfWeekArr);
    return (
      <svg width={svgWidth} height={svgHeight}>
        {this.props.dayOfWeekArr.map(this.renderBar)}
      </svg>
    );
  }
}

export default TimeHasBeenSelected;
