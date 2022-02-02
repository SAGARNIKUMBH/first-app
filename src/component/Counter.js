import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    const { count } = this.state;
    this.setState(
      {
        count: count + 1,
      },
      () => {
        console.log("Callback Value", count);
      }
    );
    console.log(count);
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <div>Count-{count}</div>
        <button onClick={() => this.increment()}>increment</button>
      </div>
    );
  }
}

export default Counter;
