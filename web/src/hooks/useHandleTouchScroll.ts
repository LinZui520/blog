import {TouchEventHandler, useCallback, useEffect, useState} from "react";


const useHandleTouchScroll = () => {

  const [isScrolling, setIsScrolling] = useState(false);
  const [prevTouchY, setPrevTouchY] = useState(0);

  const handleTouch: TouchEventHandler<HTMLDivElement> = useCallback((e) => {
    if (isScrolling) return;

    const windowHeight = window.innerHeight;

    const currentScroll = window.scrollY;

    const touchY = e.touches[0].clientY;
    if (prevTouchY === 0) {
      setPrevTouchY(touchY);
      return;
    }

    const targetScroll = touchY < prevTouchY
      ? (Math.round(currentScroll / windowHeight) + 1) * windowHeight
      : (Math.round(currentScroll / windowHeight) - 1) * windowHeight

    setIsScrolling(true);
    setPrevTouchY(0);

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  }, [isScrolling, prevTouchY])

  const handleTouchWithPreventDefault = useCallback((e: TouchEvent) => e.preventDefault(),[])

  useEffect(() => {
    window.addEventListener('touchmove', handleTouchWithPreventDefault, { passive: false });

    return () => window.removeEventListener('touchmove', handleTouchWithPreventDefault);
  }, [handleTouch, handleTouchWithPreventDefault]);


  return {
    handleTouch
  };
}

export default useHandleTouchScroll;