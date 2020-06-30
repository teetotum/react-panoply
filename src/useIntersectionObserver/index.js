import { useState, useEffect, useDebugValue, useRef, useCallback } from 'react';


export const useIntersectionObserver = (options) => {
  // TODO
};


export const experimental_onEnterViewport = (callback) => {

    const target = useRef();
    const targetCallback = useCallback((node) => { target.current = node; });

    useEffect(() => {
        const options = { threshold: 1.0 };
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach( (entry) => { if (entry.isIntersecting) callback(); });
                
            }, options);
        observer.observe(target.current);
        return () => {
          observer.disconnect();
        };
      }, [target.current]);


      return { ref: targetCallback };
};
