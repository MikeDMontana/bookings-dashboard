import React, { Component } from 'react';
import dataset from './capacity_and_booking_lead_time.json';
import SetSummaryStats from './SetSummaryStats';
import TourHasBeenSelected from './TourHasBeenSelected';

class TourSelection extends Component {
  constructor(props) {
    super(props);
    this.tourSelectionChange = this.tourSelectionChange.bind(this);

    this.state={
      selectedTour: "",
      selectedTourFlag: false,
      dataset: dataset,
      currentSummaryStats: {}
    };
  }

  tourDropdownOptions = () => {
    return (<select className="selectTourDropdown" onChange={this.tourSelectionChange}>
      {Object.keys(this.state.dataset).map((tourName) =>
      <option key={tourName} value={tourName}>{tourName}</option>
    )}
    </select>
    );
  }

  tourSelectionChange = (event) => {
    const selectedTour = event.target.value;
    this.setState({
      selectedTour: selectedTour,
      selectedTourFlag: true,
      currentSummaryStats: this.state.dataset[selectedTour]['Summary Statistics']
    });
  }

  render() {
    return (
      <div>
        {this.tourDropdownOptions()}
        {this.state.selectedTourFlag && <TourHasBeenSelected dataset={this.state.dataset} selectedTour={this.state.selectedTour} />}
        <SetSummaryStats
          currentSummaryStats={this.state.currentSummaryStats}
          selectedTour={this.state.selectedTour}
          dataset={this.state.dataset}
        />
      </div>
    );
  }
}



export default TourSelection;
