import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Signup extends Component {
  // constructor() {
  //   super(this.props);
  // }
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: ""
  };

  // Update state with changes to inputs
  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async onSubmitHandler(e) {
    e.preventDefault();
    await fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        query: `mutation {
        signup(email: "${this.state.email}", password: "${
          this.state.confirmPassword
        }", firstName: "${this.state.firstName}", lastName: "${
          this.state.lastName
        }") {
          id
          email
        }
      }`
      })
    });
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <form method="POST" onSubmit={e => this.onSubmitHandler(e)}>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.onChangeHandler(e)}
          />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.onChangeHandler(e)}
          />
          <br />
          <br />
          <label htmlFor="password">Confirm Password: </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChange={e => this.onChangeHandler(e)}
          />
          <br />
          <br />
          <label htmlFor="first-name">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={e => this.onChangeHandler(e)}
          />
          <br />
          <br />
          <label htmlFor="last-name">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={e => this.onChangeHandler(e)}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
