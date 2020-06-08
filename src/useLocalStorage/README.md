# useLocalStorage (caution: pre-release - early alpha - signature might change in future releases)
A react hook to conviently work with a value stored in the [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
Any JSON serializable data type is supported.
The `defaultValue` is used when no item with the `key` is found in local storage.

# usage
```
import { useLocalStorage } from 'react-panoply';

const MyComponent = (props) => {
    cont [showToolbar, setShowToolbar] = useLocalStorage('showToolbar', true);

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
`clearIfDefault [boolean | default: true]` While this flag is active the local storage item is only set to values that are different from the defaultValue, when updated to the defaultValue the item is removed from local storage.

Example:
```
cont [showToolbar, setShowToolbar] = useLocalStorage('showToolbar', true, { clearIfDefault: true });

```

# features and behaviors
- stable updater: the updater callback function identity is guaranteed to be stable and won’t change on re-renders. This is why it’s safe to omit from the useEffect or useCallback dependency list.
- functional updates: If the new value is computed using the previous value, you can pass a function to the updater. The function will receive the previous value, and return an updated value.
- debug infos: the hook provides [debug information](https://reactjs.org/docs/hooks-reference.html#usedebugvalue) for React DevTools

# known shortcomings
- the 0.0.3-alpha implementation does not yet use deepEqual to evaluate whether the value is equal to the defaultValue when `clearIfDefault` is used. So when storing an object in local storage the serialized value is never cleared.
