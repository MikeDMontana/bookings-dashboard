import React, { Component } from 'react';
import Histogram from './Histogram';

class SetSummaryStats extends Component {
  constructor(props) {
    super(props);

    this.state={
      filteredSalaries: []
    }
  }

  componentDidMount() {
    const filteredSalaries = [
        { x0: 17530,
          x1: 20000,
          base_salary: 59140
        },
        { x0: 13000,
          x1: 15000,
          base_salary: 30000
        },
        { x0: 40000,
          x1: 23200,
          base_salary: 22000
        },
        { x0: 12530,
          x1: 40000,
          base_salary: 50000
        },
        { x0: 19530,
          x1: 33000,
          base_salary: 27140
        },
        { x0: 10230,
          x1: 29000,
          base_salary: 49140
        },
        { x0: 11530,
          x1: 19000,
          base_salary: 59140
        },
        { x0: 13530,
          x1: 22500,
          base_salary: 69140
        },
        { x0: 11530,
          x1: 30000,
          base_salary: 46040
        },
        { x0: 12530,
          x1: 35000,
          base_salary: 69140
        }
    ];
    this.setState({filteredSalaries:filteredSalaries});
  }

  render() {
    return (
    <div className="App">
      <svg width="1100" height="500">
        <Histogram  bins={10}
                    width={500}
                    height={500}
                    x="500"
                    y="100"
                    data={this.state.filteredSalaries}
                    axisMargin={83}
                    bottomMargin={15}
                    value={d => d.base_salary}
      />
      </svg>
      </div>
    );
  }
}



export default SetSummaryStats;
