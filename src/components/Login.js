import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  // Update state with changes to inputs
  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async handleSubmit(e) {
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
        signin(email: "${this.state.email}", password: "${
          this.state.password
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
        <form
          method="post"
          onChange={e => this.onChangeHandler(e)}
          onSubmit={e => this.handleSubmit(e)}>
          <label>Email: </label>
          <input type="text" id="email" name="email" />
          <br />
          <br />
          <label>Password: </label>
          <input type="password" id="password" name="password" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default Login;
