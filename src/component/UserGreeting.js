import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Hello Sagar Bhai</div>;
    //-----Use Conditional Opretor------------
    // return this.state.isLoggedIn ? (
    //   <div>Hello Sagar Bhai</div>
    // ) : (
    //   <div>Welcome To React Course</div>
    // );
    // ---------- pass Message to if else condition------------
    // let message;
    // if (this.state.isLoggedIn) {
    //   return <div>Hello Sagar Bhai</div>;
    // } else {
    //   return <div>Welcome To React Course</div>;
    // }
    // return <div>{message}</div>;
    // ----------------if else Methods--------------------------
    // if (this.state.isLoggedIn) {
    //   return <div>Hello Sagar Bhai</div>;
    // } else {
    //   return <div>Welcome To React Course</div>;
    // }
    // ---------------- Without Using Conditional Operetor-----------
    // return (
    //   <div>
    //     <div>Hello Sagar Bhai</div>
    //     <div>Welcome To React Course</div>
    //   </div>
    // );
  }
}
export default UserGreeting;
