import React, { Component } from "react";
import { Link } from "react-router-dom";

// Update state with changes to inputs
const onChangeHandler = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

class Login extends Component {
  render() {
    return (
      <div>
        <form method="post" onChange={e => this.onChangeHandler(e)}>
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
