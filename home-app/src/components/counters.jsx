import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    let { onIncrement, onDecrement, onDelete, value, id } = this.props;
    return (
      <div className="container">
        <button onClick={this.props.onReset} className="btn btn-secondary mx-2">
          reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            value={counter.value}
            counter={counter}
            id={id}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
