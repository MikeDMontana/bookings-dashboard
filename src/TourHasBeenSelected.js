import React, { Component } from 'react';
import TimeHasBeenSelected from './TimeHasBeenSelected';
import ProgressArc from './ProgressArc';

class TourHasBeenSelected extends Component {
  constructor(props) {
    super(props);
    this.timeSelectionChange = this.timeSelectionChange.bind(this);
    this.createDataArrays = this.createDataArrays.bind(this);

    this.state={
      departureTimeOptions: {},
      selectedTimeFlag: false,
      dayOfWeek: {},
      monthOfYear: {},
      weekOfYear: {},
      dayOfWeekArr: [],
      monthOfYearArr: [],
      weekOfYearArr: [],
      selectedTime: {},
      largestBookings: []
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
    this.state.largestBookings = [];

    for (let key in this.state.dayOfWeek) {
      let newObj = this.state.dayOfWeek[key];
      newObj['Day'] = key;
      if (newObj.hasOwnProperty('Total Bookings')) {
        this.state.dayOfWeekArr.push(newObj);
        this.state.largestBookings.push(newObj['Total Bookings']);
      } else {
        newObj['Total Bookings'] = 0;
        this.state.dayOfWeekArr.push(newObj);
        this.state.largestBookings.push(newObj['Total Bookings']);
      }
    }
    this.state.largestBookings.sort().reverse();
  }

  render() {
    console.log(this.props.currentSummaryStats);
    return (
      <div>
        {this.timeDropdownOptions()}
        {this.createDataArrays()}

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

        <TimeHasBeenSelected
          currentSummaryStats={this.state.currentSummaryStats}
          selectedTour={this.state.selectedTour}
          dataset={this.state.dataset}
          dayOfWeekArr={this.state.dayOfWeekArr}
          largestBookings={this.state.largestBookings}
        />
      </div>
    );
  }

}

export default TourHasBeenSelected;
