import { useState, useEffect } from "react";

export const useHasScroll = () => {
  const [scroll, setScroll] = useState(false);

  /* Check if the scrollbar has an offset. */
  const hasScroll = () => Boolean(window.scrollY);

  useEffect(() => {
    const onScroll = () => {
      /* Update the state when the scroll position changes. */
      scroll !== hasScroll() && setScroll(hasScroll());
    };

    /* Set the initial scroll state and listen for changes. */
    onScroll();
    document.addEventListener("scroll", onScroll);

    return () => {
      /* Clean up the scroll event listener. */
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
