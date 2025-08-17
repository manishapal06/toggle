import { useState } from "react";

function useToggleItems(initialValue = [], initialPosition = 0) {
  // Ensure initialPosition is valid, default to 0 if not provided
  const [index, setIndex] = useState(initialPosition || 0);

  // Current state based on index
  const state = initialValue[index];

  // Function to toggle state
  const toggleState = () => {
    setIndex((prevIndex) => (prevIndex + 1) % initialValue.length);
  };

  return [state, toggleState];
}

export default useToggleItems;
