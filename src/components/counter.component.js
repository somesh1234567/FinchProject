import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CounterList extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleOn = this.handleOn.bind(this);
    this.handleOff = this.handleOff.bind(this);
  }

  handleOn() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  handleOff() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleOn}>Increase</button>
        <button onClick={this.handleOff}>Decrease</button>
        <br />
        <Link to={"/time"}>Go to Page 2</Link>
      </div>
    );
  }
}
