# useCookie (caution: pre-release - early alpha - signature might change in future releases)
A react hook to conviently work with a value stored in a cookie.
By default the cookie is set to expire after one year.
Any JSON serializable data type is supported.
The `defaultValue` is used as long as the cookie is not set on the document.

# usage
```
import { useCookie } from 'react-panoply';

const MyComponent = (props) => {
    cont [showToolbar, setShowToolbar] = useCookie('showToolbar', true);

    return (
        <div>
        { showToolbar && <Toolbar /> }

        {
            // ...
        }
        </div>
    );
}

```

# options
`clearIfDefault [boolean | default: true]` While this flag is active the cookie is only set to values that are different from the defaultValue, when updated to the defaultValue the cookie is instead set to expire (cookies can not be deleted by code running in a webpage, only the value part of the cookie can be cleared and the cookie set to expire).

Example:
```
cont [showToolbar, setShowToolbar] = useCookie('showToolbar', true, { clearIfDefault: true });

```

# features and behaviors
- stable updater: the updater callback function identity is guaranteed to be stable and won’t change on re-renders. This is why it’s safe to omit from the useEffect or useCallback dependency list.
- functional updates: If the new value is computed using the previous value, you can pass a function to the updater. The function will receive the previous value, and return an updated value.
- debug infos: the hook provides [debug information](https://reactjs.org/docs/hooks-reference.html#usedebugvalue) for React DevTools

# known shortcomings
- the 0.0.4-alpha implementation does not yet use deepEqual to evaluate whether the value is equal to the defaultValue when `clearIfDefault` is used. So when storing an object in a cookie the serialized value is never cleared.

# thoughts
This hook is useful for storing some UI state that should survive from one session to the next. But all modern browsers support [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) now and the use of cookies for such things is considered a practice from the past. I therefore recommend the [useLocalStorage](../useLocalStorage/) hook over the useCookie hook.