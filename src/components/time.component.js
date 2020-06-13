import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TimeList extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  handleChange() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Current Time</h1>
        <h2>That's {this.state.date.toLocaleTimeString()}</h2>
        {this.handleChange()}
        <br />
        <Link to={"/data"}>Go to Page 3!!</Link>
        <br />
        <Link to={"/home"}>Return to Page 1!!</Link>
      </div>
    );
  }
}
