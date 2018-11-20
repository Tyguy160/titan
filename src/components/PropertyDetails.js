import React, { Component } from "react";

class PropertyDetails extends Component {
  state = {
    title: "",
    marketValue: "",
    purchasePricePercent: "",
    downPayment: "",
    mortgageApr: "",
    renoCost: "",
    unitCount: "",
    unitRent: "",
    vacancy: "",
    operatingExpense: ""
  };

  // Update state with changes to inputs
  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form style={{ textAlign: "left", padding: "10px" }}>
        <label>Report Title</label>
        <input type="text" name="title" id="title" />
        <br />
        <label>Current Market Value</label>
        <input type="number" name="marketValue" id="marketValue" />
        <br />
        <label>Percent Purchase Price of Market Value</label>
        <input
          type="number"
          name="purchasePricePercent"
          id="purchasePricePercent"
        />
        <br />
        <label>Down Payment (% or $)</label>
        <input type="number" name="downPayment" id="downPayment" />
        <br />
        <label>Mortgage APR</label>
        <input type="number" name="mortgageApr" id="mortgageApr" />
        <br />
        <label>Renovation Cost</label>
        <input type="number" name="renoCost" id="renoCost" />
        <br />
        <label>Number of Units</label>
        <input type="number" name="unitCount" id="unitCount" />
        <br />
        <label>Rent Per Unit</label>
        <input type="number" name="unitRent" id="unitRent" />
        <br />
        <label>Vacancy %</label>
        <input type="number" name="vacancy" id="vacancy" />
        <br />
        <label>Operating Expense %</label>
        <input type="number" name="operatingExpense" id="operatingExpense" />
      </form>
    );
  }
}

export default PropertyDetails;
