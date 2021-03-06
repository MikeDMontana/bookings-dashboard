import React, { Component } from 'react';
import BarChart from './BarChart';
import ProgressArc from './ProgressArc';

class TourHasBeenSelected extends Component {
  constructor(props) {
    super(props);
    this.timeSelectionChange = this.timeSelectionChange.bind(this);
    this.createDataArrays = this.createDataArrays.bind(this);

    this.state={
      departureTimeOptions: {},
      dayOfWeek: {},
      monthOfYear: {},
      weekOfYear: {},
      dayOfWeekArr: [],
      monthOfYearArr: [],
      weekOfYearArr: [],
      selectedTime: {},
    };
  }

  componentDidMount() {
    this.setState({
      departureTimeOptions: this.props.dataset[this.props.selectedTour]['Departure Time']
    });
  }

  timeDropdownOptions = () => {
    return (<select className="selectTimeDropdown" onChange={this.timeSelectionChange}>
      {Object.keys(this.state.departureTimeOptions).map((tourTime) =>
      <option key={tourTime} value={tourTime}>{tourTime}</option>
    )}
    </select>
    );
  }

  timeSelectionChange = (event) => {
    const selectedTime = event.target.value;
    this.setState({
      selectedTime: selectedTime,
      selectedTimeFlag: true,
      dayOfWeek: this.state.departureTimeOptions[selectedTime]['Day of Week'],
      monthOfYear: this.state.departureTimeOptions[selectedTime]['Month of Year'],
      weekOfYear: this.state.departureTimeOptions[selectedTime]['Week of Year']
    });
  }

  createDataArrays = () => {
    this.state.dayOfWeekArr = [];

    for (let key in this.state.dayOfWeek) {
      let newObj = this.state.dayOfWeek[key];
      newObj['Day'] = key;
      if (newObj.hasOwnProperty('Total Bookings')) {
        this.state.dayOfWeekArr.push(newObj);
      } else {
        newObj['Total Bookings'] = 0;
        this.state.dayOfWeekArr.push(newObj);
      }
    }
  }

  render() {
    console.log(this.props.currentSummaryStats);
    return (
      <div>
        {this.timeDropdownOptions()}
        {this.createDataArrays()}
        <div className="d3Elements">
          <ProgressArc
            height={260}
            width={260}
            innerRadius={100}
            outerRadius={110}
            id="d3-arc"
            backgroundColor='#e6e6e6'
            foregroundColor='#24867a'
            duration={2000}
            percentComplete={this.props.currentSummaryStats['Average Capacity']}
          />

          <BarChart
            dayOfWeekArr={this.state.dayOfWeekArr}
          />
        </div>
      </div>
    );
  }

}

export default TourHasBeenSelected;
