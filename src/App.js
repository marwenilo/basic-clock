import React, { Component } from "react";
import Cloock from "./components/Clock";
// import { Switch } from 'antd';

export default class App extends Component {
  state = {
    checker: false
  };

  handelDate = () => {
    this.setState({
      checker: !this.state.checker
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handelDate}> click me </button>
        <Cloock checker={this.state.checker} />
      </div>
    );
  }
}
