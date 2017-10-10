import React, { Component } from 'react';
import dataset from './capacity_and_booking_lead_time.json';
import TimeHasBeenSelected from './TimeHasBeenSelected';

class TourHasBeenSelected extends Component {
  constructor(props) {
    super(props);
    this.timeSelectionChange = this.timeSelectionChange.bind(this);

    this.state={
      departureTimeOptions: {},
      selectedTimeFlag: false
    };
  }

  componentDidMount() {
    this.setState({
      departureTimeOptions: dataset[this.props.selectedTour]['Departure Time']
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
      selectedTimeFlag: true
    });
  }



  render() {
    return (
      <div>
      {this.timeDropdownOptions()}
      {console.log(this.state.departureTimeOptions['01:00pm'])}
      {this.state.selectedTimeFlag && <TimeHasBeenSelected selectedTime={this.state.selectedTime} /> }
      </div>
    );
  }

}

export default TourHasBeenSelected;
