import React, { Component } from 'react';
import dataset from './capacity_and_booking_lead_time.json';
import TourHasBeenSelected from './TourHasBeenSelected';

class TourSelection extends Component {
  constructor(props) {
    super(props);
    this.tourSelectionChange = this.tourSelectionChange.bind(this);

    this.state={
      selectedTour: "",
      selectedTourFlag: false
    };
  }

  tourDropdownOptions = () => {
    return (<select className="selectTourDropdown" onChange={this.tourSelectionChange}>
      {Object.keys(dataset).map((tourName) =>
      <option key={tourName} value={tourName}>{tourName}</option>
    )}
    </select>
    );
  }

  tourSelectionChange = (event) => {
    const selectedTour = event.target.value;
    this.setState({
      selectedTour: selectedTour,
      selectedTourFlag: true
    });
  }

  render() {
    return (
      <div>
        {this.tourDropdownOptions()}
        {console.log(dataset)}
        {console.log(dataset[this.state.selectedTour])}
        {this.state.selectedTourFlag && <TourHasBeenSelected selectedTour={this.state.selectedTour} />}
      </div>
    );
  }
}



export default TourSelection;
