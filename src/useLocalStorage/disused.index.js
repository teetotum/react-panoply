import { useState, useDebugValue, useRef, useCallback } from 'react';

const tryRetrieve = (key, fallback) => {
    const value = window.localStorage.getItem(key);
    return (value == null) ? fallback : JSON.parse(value);
};

const setStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

export const useLocalStorage = (key, defaultValue) => {
    const [value, setState] = useState(() => tryRetrieve(key, defaultValue));
    
    const updateValue = (newValue) => {
        newValue = newValue instanceof Function ? newValue(value) : newValue;
        setState(newValue);
        setStorage(key, newValue);
    };

    const stable = useRef();
    stable.current = updateValue;
    const stable_updateValue = useCallback((newValue) => stable.current(newValue), []);

  useDebugValue(value);

  return [value, stable_updateValue];
}