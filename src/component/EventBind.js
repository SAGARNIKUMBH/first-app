import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello Friend",
    };
  }
  // this.ClickHandler = this.ClickHandler.bind(this);

  //   ClickHandler() {
  //     this.setState({
  //       message: "Welcome To React Apps",
  //     });
  //     console.log(this);
  //   }

  ClickHandler = () => {
    this.setState({
      message: "Welcome To React Apps",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.ClickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.ClickHandler()}>Click</button> */}
        <button onClick={this.ClickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
