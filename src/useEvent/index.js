import { useState, useEffect } from 'react';

export const useEvent = (type, listener, options) => {
  const [target, setTarget] = useState();

  useEffect(
    () => {
      if (target) {
        target.addEventListener(type, listener, options);
        return () => target.removeEventListener(type, listener, options);
      }
    }, [target, listener, options],
  );

  return [setTarget];
};

export const useFocusIn = (listener, options) => useEvent('focusin', listener, options);
export const useFocusOut = (listener, options) => useEvent('focusout', listener, options);
