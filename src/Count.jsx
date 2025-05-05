import { useState } from "react";
import videoSrc from "./assets/video.mp4";

export const Count = () => {
  const [count, setCount] = useState(0);

  const handlerIncrement = () => setCount(count + 1);
  const handlerDecrement = () => (count === 0 ? 0 : setCount(count - 1));

  return (
    <section className="count_container">
      <button className="rest_count" onClick={() => handlerDecrement()}>
        -
      </button>

      <p className="counter">{count}</p>

      <button className="add_count" onClick={() => handlerIncrement()}>
        +
      </button>

      {count >= 27 && (
        <video
          className="video"
          src={videoSrc}
          preload="auto"
          autoPlay
          loop
        ></video>
      )}
    </section>
  );
};
