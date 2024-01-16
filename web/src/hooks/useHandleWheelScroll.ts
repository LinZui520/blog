import {useCallback, useEffect, useState, WheelEventHandler} from "react";

const useHandleWheelScroll = () => {

  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel: WheelEventHandler<HTMLDivElement> = useCallback((e) => {
    if (isScrolling) return;

    setIsScrolling(true);

    const windowHeight = window.innerHeight;

    const currentScroll = window.scrollY;

    const targetScroll = e.deltaY > 0
      ? (Math.round(currentScroll / windowHeight) + 1) * windowHeight
      : (Math.round(currentScroll / windowHeight) - 1) * windowHeight

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  }, [isScrolling]);

  const handleWheelWithPreventDefault = useCallback((e: WheelEvent) => e.preventDefault(), [])

  useEffect(() => {
    window.addEventListener('wheel', handleWheelWithPreventDefault, { passive: false });

    return () => window.removeEventListener('wheel', handleWheelWithPreventDefault);
  }, [handleWheel, handleWheelWithPreventDefault]);


  return {
    handleWheel,
  };
};

export default useHandleWheelScroll;
