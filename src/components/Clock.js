import React, { Component } from "react";
import Clock from "react-live-clock";

class Cloock extends Component {
  render() {
    return (
      <div className="container">
        <Clock
          className="time"
          format={"HH:mm:ss"}
          ticking={true}
          timezone={"US/Pacific"}
        />
        {this.props.checker ? (
          <Clock className="date" format={"dddd, MMMM Mo, YYYY"} />
        ) : null}
      </div>
    );
  }
}
export default Cloock;
