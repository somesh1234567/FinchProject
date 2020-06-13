import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DataList extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { items, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map((item) => (
              <li>
                {item.first} {item.last}
              </li>
            ))}
          </ul>
          <br />
          <Link to={"/currency"}>Go to Page 4!!</Link>
          <br />
          <Link to={"/time"}>Return!!!</Link>
        </div>
      );
    }
  }
}
