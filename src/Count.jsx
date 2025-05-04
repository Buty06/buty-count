import { useState } from "react";
import videoSrc from "./assets/video.mp4";

export const Count = () => {
  const [count, setCount] = useState(0);

  const handlerIncrement = () => setCount(count + 1);
  const handlerDecrement = () => (count === 0 ? 0 : setCount(count - 1));

  if (count === 30) {
    console.log(23);
  }

  return (
    <section className="count_container">
      <button className="rest_count" onClick={() => handlerDecrement()}>
        -
      </button>

      <p className="counter">{count}</p>

      <button className="add_count" onClick={() => handlerIncrement()}>
        +
      </button>

      {count === 30 && (
        <video className="video" src={videoSrc} autoPlay loop></video>
      )}
    </section>
  );
};
