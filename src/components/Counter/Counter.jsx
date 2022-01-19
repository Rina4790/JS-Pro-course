import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const decr = () => {
    setCount(count - 1);
  };

  const incr = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incr}>+</button>
      <p>{count}</p>
      <button onClick={decr}>-</button>
    </div>
  );
};
