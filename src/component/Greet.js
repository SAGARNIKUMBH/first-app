import React from "react";

// function Greet() {
//   return <h1>Hello Sagar Nikumbh</h1>;
// }

const Greet = (props) => {
  const { name, heroName } = props;
  console.log(props);
  return (
    <h1>
      Hello {name} is {heroName}
    </h1>
  );
};
export default Greet;
