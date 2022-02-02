import React from "react";
import Person from "./Person";

function NameList() {
  const Persons = [
    {
      id: 1,
      name: "Gaurav",
      age: 25,
      Skill: "All in one Frontend Devloper",
    },
    {
      id: 2,
      name: "Gaurav ",
      age: 25,
      Skill: "All in one Frontend Devloper",
    },
    {
      id: 3,
      name: "Abhi ",
      age: 24,
      Skill: "Frontend Devloper React",
    },
    {
      id: 4,
      name: "Prasad",
      age: 23,
      Skill: "Angular & React",
    },
    {
      id: 5,
      name: "Roshan",
      age: 23,
      Skill: "javascript & React",
    },
    {
      id: 6,
      name: "Pritesh",
      age: 22,
      Skill: "Angular",
    },
  ];
  const personList = Persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
