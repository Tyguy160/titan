import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <form style={{ textAlign: "left", padding: "10px" }}>
          Report Title
          <input />
          <br />
          Property Address
          <input />
          <br />
          Property City
          <input />
          <br />
          Property State
          <input />
          <br />
          Property Zip
          <input />
          <br />
          Annual Property Taxes
          <input />
          <br />
          MLS Number
          <input />
          <br />
          Property Photos
          <input />
          <br />
          Property Sales Description
          <input />
          <br />
          Bedrooms
          <input />
          <br />
          Bathrooms
          <input />
          <br />
          Property Type
          <input />
          <br />
          Total Sq. Footage
          <input />
          <br />
          Lot Size (Sq. Ft.)
          <input />
          <br />
          Year Built
          <input />
          <br />
          Year Renovated
          <input />
          <br />
          Units
          <input />
          <br />
          Stories
          <input />
          <br />
          County Appraised Value
          <input />
          <br />
          Pool
          <input />
          <br />
          Heating
          <input />
          <br />
          Cooling
          <input />
          <br />
          Fireplace
          <input />
          <br />
          Garage
          <input />
          <br />
          Construction
          <input />
          <br />
          Roofing
          <input />
          <br />
          Flooring Type(s)
          <input />
          <br />
          Wiring Condition
          <input />
          <br />
          Plumbing Condition
          <input />
          <br />
          Siding Material
          <input />
          <br />
          Other Property Information
          <input />
          <br />
        </form>
        <br />
        <form style={{ textAlign: "left", padding: "10px" }}>
          Purchase Price
          <input />
          <br />
          After Repair Value
          <input />
          <br />
          Purchase Closing Cost
          <input />
          <br />
          Estimated Repair Cost
          <input />
          <br />
        </form>
      </div>
    );
  }
}

export default App;
