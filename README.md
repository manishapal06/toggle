# useToggleItems - Custom React Hook

## 📌 Problem Statement
You are tasked with implementing a custom hook called `useToggleItems` in React.  
The hook should allow toggling between items in an array.

### Requirements:
1. **Parameters:**
   - `initialValue` → An array of items. Example: `["A", "B", "C"]`
   - `initialPosition` → (Optional) The position of the initial item (default is `0`).

2. **Return Values:**
   - Current state (the currently selected item from the array).
   - A function `toggleState` that changes the current item to the next one in the array (loops back after the last item).

---

## 📂 File Structure
toggle-hook-app/
│
├── src/
│ ├── App.js
│ ├── useToggleItems.js
│ └── index.js
├── package.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup & Installation
1. Create a new React project:
   ```bash
   npx create-react-app toggle-hook-app
   cd toggle-hook-app
Create a custom hook file inside src/:

bash
Copy
Edit
touch src/useToggleItems.js
Add the hook code in useToggleItems.js:

javascript
Copy
Edit
import { useState } from "react";

function useToggleItems(initialValue = [], initialPosition = 0) {
  const [index, setIndex] = useState(initialPosition || 0);
  const state = initialValue[index];

  const toggleState = () => {
    setIndex((prevIndex) => (prevIndex + 1) % initialValue.length);
  };

  return [state, toggleState];
}

export default useToggleItems;
Update App.js:

javascript
Copy
Edit
import React from "react";
import useToggleItems from "./useToggleItems";

function App() {
  const items = ["A", "B", "C"];
  const [state, toggleState] = useToggleItems(items, 1); // starts at "B"

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Custom Hook: useToggleItems</h1>
      <h2>Current State: {state}</h2>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
}

export default App;
Run the project:

bash
Copy
Edit
npm start
▶️ Example Usage
javascript
Copy
Edit
const [state, toggleState] = useToggleItems(["A", "B", "C"], 1);

console.log(state); // "B" (since position = 1)
toggleState();      // Next -> "C"
toggleState();      // Next -> "A"
🎯 Output Flow
If items = ["A", "B", "C"] and position = 1, the toggle flow will be:

css
Copy
Edit
B → C → A → B → ...
