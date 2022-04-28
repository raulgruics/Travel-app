import React from 'react'
import './DestinationsStyle.css'

import BoraBora from'../../assets/01.jpg';
import BoraBora2 from "../../assets/02.jpg";
import Maldives from "../../assets/03.jpg";
import Maldives2 from "../../assets/05.jpg";
import KeyWest from "../../assets/04.jpg";

function Destinations() {
  return (
    <div name="destinations" className="destinations">
      <div className="container-dest">
        <h1>All-inclusive Resorts</h1>
        <p>On the Carribean's Best Beaches</p>
        <div className="img-container">
          <img src={BoraBora} alt="/" className="img" />
          <img src={BoraBora2} alt="/" className="img" />
          <img src={Maldives} alt="/" className="img" />
          <img src={Maldives2} alt="/" className="img" />
          <img src={KeyWest} alt="/" className="img" />
        </div>
      </div>
    </div>
  );
}

export default Destinations