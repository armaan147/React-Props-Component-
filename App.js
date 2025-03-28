
//for Person.js
import React from "react";
import Person from "./Person";  // Importing the Person Component

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Props in React Example</h1>
      <Person name="Alice" age="25" city="New York" />
      <Person name="Bob" age="30" city="London" />
      <Person name="Charlie" age="28" city="Paris" />
    </div>
  );
}

export default App;
