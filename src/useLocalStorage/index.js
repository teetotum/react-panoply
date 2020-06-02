import { useState, useEffect, useDebugValue } from 'react';

// TODO: use deepEqual for objects
// this check is currently only really useful for boolean, number, and string
const equal = (a, b) => a === b;

const defaultOptions = {
    clearIfDefault: true,
};

const tryRetrieve = (key, fallback) => {
    try {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch (e) {
        console.warn(`react hook useLocalStorage: reading ${key} from localStorage failed: ${e}`);
        return fallback;
    }
};

export const useLocalStorage = (key, defaultValue, options) => {
    const effectiveOptions = {...defaultOptions, ...options};
    const [value, setState] = useState(() => tryRetrieve(key, defaultValue));
    useEffect(
        () => {
            try {
                if (effectiveOptions.clearIfDefault && equal(value, defaultValue))
                    window.localStorage.removeItem(key);
                else
                    window.localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.warn(`react hook useLocalStorage: writing ${key} to localStorage failed: ${e}`);
            }
        },
        [key, value, effectiveOptions.clearIfDefault, defaultValue],
    );
    useDebugValue(value);
    return [value, setState];
};
