import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

export const Hello = () => {
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const divRef = useRef();
  const rect = useMeasure(divRef, [data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "loading..." : data}</div>
      </div>
      {/* <div>{JSON.stringify(rect, null, 2)}</div> */}
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
};

//   useEffect(() => {
//     console.log("render");
//     return () => {
//       console.log("unmount");
//     };
//   }, []);
//const renders = useRef(0);

//console.log("Hello renders: ", renders.current++);
