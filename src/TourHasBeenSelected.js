import React, { Component } from 'react';
import SetSummaryStats from './SetSummaryStats';

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
      selectedTime: {}
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
      let newObj = {[key]:this.state.dayOfWeek[key]}
      this.state.dayOfWeekArr.push(newObj);
    }
  }

  render() {
    return (
      <div>
      {this.timeDropdownOptions()}
      {this.createDataArrays()}
      {console.log(this.state.departureTimeOptions[this.state.selectedTime])}
      {console.log(this.state.dayOfWeek)}
      {console.log(this.state.dayOfWeekArr)}
      </div>
    );
  }

}

export default TourHasBeenSelected;
