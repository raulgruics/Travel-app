import React from 'react'
import './SearchStyle.css';

import Gold from '../../assets/gold.png'

function Search()  {

  return (
    <div name="search"  className="search">
      <div className="container-search">
        <div className="box">
          <h1>World's Leading</h1>
          <h2>All-inclusive company for 20 years in a row</h2>
          <button className="btn">View Packages</button>
        </div>

        <div className="box">
          <label>Destination</label>
          <select>
            <option value="1">Grande Antigua</option>
            <option value="1">Grenda</option>
            <option value="1">Emerald Bay</option>
            <option value="1">Bora Bora</option>
            <option value="1">Key West</option>
            <option value="1">Maldives</option>
            <option value="1">Barbados</option>
          </select>
        </div>

        <div className="box">
          <div className="inputs">
            <label>Check in</label>
            <input type="date" />
          </div>
          <div className="inputs">
            <label>Check Out</label>
            <input type="date" />
          </div>
          <button className="btn">Rates and Availabilities</button>
        </div>
      </div>
    </div>
  );
}

export default Search