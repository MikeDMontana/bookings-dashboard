import React, { Component } from 'react';
import * as d3 from 'd3';
// import ProgressArc from './ProgressArc';
import Histogram from './Histogram';

class SetSummaryStats extends Component {
  constructor(props) {
    super(props);

    this.state={
      barprops: {}
    }
  }

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
        <Histogram  bins={10}
                    width={500}
                    height={500}
                    x="500"
                    y="10"
                    data={1,2,3,4,5,6,7,8,9}
                    axisMargin={83}
                    bottomMargin={5}
                    value={5}
      </div>
    );
  }
}

export default SetSummaryStats;
