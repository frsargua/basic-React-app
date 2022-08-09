import React, { Component } from "react";
// import "./App.css";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  render() {
    console.log(this.state.value);
    return (
      <div>
        <span className="btn btn-primary">{this.state.value}</span>{" "}
        <button onClick={this.handleIncrement} className="btn btn-secondary">
          Increase
        </button>
      </div>
    );
  }
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  deleteRow() {
    return;
  }
}
export default Counter;
