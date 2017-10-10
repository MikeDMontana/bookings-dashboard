import React, { Component } from 'react';
import dataset from './capacity_and_booking_lead_time.json';

class TimeHasBeenSelected extends Component {
  constructor(props) {
    super(props);

    this.state={

    };
  }

  render() {
    return (
      <div>
        {console.log(this.props.selectedTime)}
      </div>
    );
  }
}

export default TimeHasBeenSelected;
