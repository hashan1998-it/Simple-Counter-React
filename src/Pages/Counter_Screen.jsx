import React, { useState } from "react";
import "../Styles/Counter_Screen.css";

function CounterScreen() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={`counter-screen`}>
      <div className={`counter-card`}>
        <h2>Count</h2>
        <p>{count}</p>
        <div className={`counter-button-container`}>
          <button onClick={handleIncrement} className={`btn`}>
            +
          </button>
          <button onClick={handleReset} className={`btn`}>
            Reset
          </button>
          <button
            onClick={handleDecrement}
            className={`btn`}
            disabled={count <= 0}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterScreen;
