import React, { Component } from 'react';
import TourSelection from './TourSelection';
import NavBar from './NavBar';

class App extends Component {

  render() {
    return (
      <div className="app">
        <NavBar />
        <div className="mainBody">
          <div className="clientInfo">
            <img src="img/mbtLogo.png" alt="fake client logo" />
            <h2>WELCOME MISSOULA BIKE TOURS!</h2>
            <p>To get started please select a tour from the top dropdown<br />
                You can view overall average capacity of each tour as well as total bookings by day and time.
            </p>
          </div>
        <TourSelection />
        </div>
      </div>
    );
  }
}

export default App;
