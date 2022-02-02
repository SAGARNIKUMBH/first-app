import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: "",
      Comments: "",
      topic: "react",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      UserName: event.target.value,
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      Comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.UserName} ${this.state.Comments} ${this.state.topic}`);
  };
  render() {
    const { UserName, Comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={UserName}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={Comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
