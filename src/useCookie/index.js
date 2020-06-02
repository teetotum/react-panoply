import { useState, useEffect, useDebugValue } from 'react';
import Cookies from 'cookies-js';

// TODO: use deepEqual for objects
// this check is currently only really useful for boolean, number, and string
const equal = (a, b) => a === b;

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;
Cookies.defaults = { expires: ONE_YEAR_IN_SECONDS };

const defaultOptions = {
    clearIfDefault: true,
};

const tryRetrieve = (key, fallback) => {
    const value = Cookies.get(key);
    return value ? JSON.parse(value) : fallback;
};

export const useCookie = (key, defaultValue, options) => {
    const effectiveOptions = {...defaultOptions, ...options};
    const [value, setState] = useState(() => tryRetrieve(key, defaultValue));
    useEffect(
        () => {
            if (effectiveOptions.clearIfDefault && equal(value, defaultValue))
                Cookies.expire(key);
            else
                Cookies.set(key, JSON.stringify(value));
        },
        [key, value, effectiveOptions.clearIfDefault, defaultValue],
    );
    useDebugValue(value);
    return [value, setState];
};
