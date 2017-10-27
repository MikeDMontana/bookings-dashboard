import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <div>
      <div className="navbar">
        <img className="navLogo" src="img/logo.png" alt="TOMIS logo" />
        <ul>
          <li><div>SITE DASHBOARD <img src="img/dashboardIcon.png" alt="Tomis Dashboard Icon" /></div></li>
          <li><div>SETTINGS <img src="img/settingsIcons.png" alt="Account Settings" /></div></li>
        </ul>
      </div>
      <div className="greyNav"></div>
      </div>
    );
  }


}

export default NavBar;
