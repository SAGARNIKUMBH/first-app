import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  ChangeMessage() {
    this.setState({
      message: "Thank You For Visit On My React Apps",
    });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.ChangeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
