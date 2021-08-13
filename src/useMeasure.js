import { useLayoutEffect, useState } from "react";

export const useMeasure = (ref, deps) => {
  const [rect, setRect] = useState({});

  useLayoutEffect(() => {
    setRect(ref.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rect;
};
