import React, { Component } from "react";
import "./App.css";

class counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span className="btn btn-primary">{this.state.count}</span>{" "}
        <button
          onClick={() => {
            this.deleteRow();
          }}
          className="btn btn-secondary"
        >
          Increase
        </button>
      </div>
    );
  }

  deleteRow() {
    return;
  }
}
export default counter;
