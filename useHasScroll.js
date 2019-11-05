import { useState, useEffect } from "react";

export const useHasScroll = () => {
  /* Check initial scroll position and set state */
  const hasScroll = () => Boolean(window.scrollY);
  const [scroll, setScroll] = useState(hasScroll());

  useEffect(() => {
    const onScroll = () => {
      /* Update scroll state */
      scroll !== hasScroll() && setScroll(hasScroll());
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      /* Clean up */
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
