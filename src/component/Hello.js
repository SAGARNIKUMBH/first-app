import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>All The Best </h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    { id: "Hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Every One")
  );
};

export default Hello;
