import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="count_container">
      <button className="rest_count" onClick={() => setCount(count - 1)}>
        -
      </button>

      <p className="counter">{count}</p>

      <button className="add_count" onClick={() => setCount(count + 1)}>
        +
      </button>
    </section>
  );
};
