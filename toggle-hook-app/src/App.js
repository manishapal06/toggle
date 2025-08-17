import React from "react";
import useToggleItems from "./useToggleItems";

function App() {
  const items = ["A", "B", "C"];
  const [state, toggleState] = useToggleItems(items, 1); 
  // Starts at index 1 -> "B"

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Custom Hook: useToggleItems</h1>
      <h2>Current State: {state}</h2>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
}

export default App;
