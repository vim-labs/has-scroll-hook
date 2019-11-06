import { useState, useEffect } from "react";

export const useHasScroll = () => {
  /* Check if the scrollbar has an offset. */
  const hasScroll = () => Boolean(window.scrollY);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      /* Update the state when the scroll position changes. */
      scroll !== hasScroll() && setScroll(hasScroll());
    };

    /* Set the initial scroll state. */
    onScroll();
    document.addEventListener("scroll", onScroll);

    return () => {
      /* Clean up the event listener. */
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
