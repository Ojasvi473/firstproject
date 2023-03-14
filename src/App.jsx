import React, { useState } from "react";
const App = () => {
  const [state, setState] = useState(0);
  const handleIncrease = () => setState(state + 1);
  const handleDecrease = () => setState(state - 1);
  return (
    <div>
      {state}
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};
export default App;

// const callData = async () => {
//   const response = await axios("url");
//   console.log(response);
// };
