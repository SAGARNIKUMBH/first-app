import React from "react";

function Person({ person }) {
  return (
    <h2 key={person.id}>
      I am {person.name}. <br /> I am {person.age} year old. <br /> I know{" "}
      {person.Skill}
    </h2>
  );
}

export default Person;
