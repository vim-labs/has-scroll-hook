import { useState, useEffect } from "react";

export const useHasScroll = () => {
  /* Returns a boolean value based on the window's Y-axis scrollbar.
  True: The vertical scrollbar has a position greater than 0.
  False: The vertical scrollbar is at the top of the page. */

  const [hasScroll, setHasScroll] = useState(false);
  const getIsVerticallyScrolled = () => Boolean(window.scrollY);

  useEffect(() => {
    // Callback to compare hasScroll state to window.scrollY and commit changes.
    const handleScrollUpdate = () =>
      hasScroll !== getIsVerticallyScrolled() &&
      setHasScroll(getIsVerticallyScrolled());

    // Set the initial scroll state and listen for changes.
    handleScrollUpdate();
    document.addEventListener("scroll", handleScrollUpdate);

    return () => {
      // Clean up the scroll event listener.
      document.removeEventListener("scroll", handleScrollUpdate);
    };
  }, [hasScroll, setHasScroll]);

  return hasScroll;
};
