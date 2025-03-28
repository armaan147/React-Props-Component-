import React from "react";

function Person(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

export default Person;
