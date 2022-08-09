import React, { Component } from "react";
// import "./App.css";

class Counter extends Component {
  render() {
    return (
      <div className="py-1 d-flex justify-content-center align-items-center">
        <span className={this.addClass()}>{this.props.value}</span>{" "}
        <div>
          <button
            onClick={() => {
              this.props.onIncrement(this.props.counter);
            }}
            className="btn btn-secondary mx-2"
          >
            +
          </button>
          <button
            onClick={() => {
              this.props.onDecrement(this.props.counter);
            }}
            className="btn btn-secondary mx-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  addClass = () => {
    let customClass = "btn ";
    if (this.props.counter.value === 0) {
      customClass += "btn-danger";
    } else {
      customClass += "btn-warning";
    }
    return customClass;
  };
}
export default Counter;
