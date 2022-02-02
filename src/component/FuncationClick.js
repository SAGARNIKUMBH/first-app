import React from "react";

function FuncationClick() {
  function ClickHandler() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={ClickHandler}>Click</button>
    </div>
  );
}

export default FuncationClick;
