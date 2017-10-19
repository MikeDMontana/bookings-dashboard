import React, { Component } from 'react';
import * as d3 from 'd3';
import ProgressArc from './ProgressArc';

class SetSummaryStats extends Component {
  constructor(props) {
    super(props);
  }

  // parseStatsForArc = () => {
  //   return (<div>
  //     {Object.keys(this.props.currentSummaryStats).map((tourStat) =>
  //       <ProgressArc
  //         height={300}
  //         width={300}
  //         innerRadius={100}
  //         outerRadius={110}
  //         id="d3-arc"
  //         backgroundColor='#e6e6e6'
  //         foregroundColor='#00ff00'
  //         duration={2000}
  //         percentComplete={this.props.currentSummaryStats[tourStat]}
  //       />
  //   )}
  //   </div>
  //   );
  // }

  render() {
    if (Object.keys(this.props.currentSummaryStats).length !== 4 && this.props.selectedTour.length > 1) {
      return (
        <div>
        Sorry No Summary Stats For That Tour Selection
        </div>
      );
    }
    console.log(this.props.currentSummaryStats);
    return (
      <div>
        <ProgressArc
            height={300}
            width={300}
            innerRadius={100}
            outerRadius={110}
            id="d3-arc"
            backgroundColor='#e6e6e6'
            foregroundColor='#00ff00'
            duration={2000}
            percentComplete={this.props.currentSummaryStats['Average Capacity']}
          />
      </div>
    );
  }
}

export default SetSummaryStats;
