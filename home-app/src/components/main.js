import React, { Component } from "react";
import Counters from "./counters";

class main extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
          </div>
        </nav>

        <Counters
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.deleteRow}
          onReset={this.reset}
          counters={this.state.counters}
        ></Counters>
      </div>
    );
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    if (counter.value != 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
    return;
  };

  deleteRow = (counter) => {
    let arr = this.state.counters.filter((el) => {
      if (el.id !== counter) {
        return el;
      }
    });
    this.setState({ counters: arr });
    return;
  };

  reset = () => {
    let counters = this.state.counters.map((el) => {
      el.value = 0;
      return el;
    });
    this.setState({ counters });
    return;
  };
}

export default main;
