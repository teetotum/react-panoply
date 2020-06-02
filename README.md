# react-panoply (caution: pre-release - 0.0.2-alpha)

A curated collection of highly reusable react hooks. Solves all kinds of programming headaches that sooner or later arise naturally in many react projects and that can be cured with just the right combination of well-crafted hooks.

The hooks in this collection are currently under active development and trial. Therefore implementation decisions and signatures might change in the future until the package is considered mature enough to be released as version 1.0.0
The mission statement is:
All hooks in this collection are designed to satisfy the following:
- sensibly named
- concise for the average use-case
- but allow for complex use-cases via optional parameters
- customizable through parameters to honor the natural usage spectrum of their respective feature (e.g. a cookie hook must accept options to control cookie expiration, a click hook must accept options to specify whether 'MouseDown' or 'MouseUp' are considered a click)
- sensible defaults
- relevant enough (a well-crafted but highly specific hook that is only really useful in one single project will not make it into the collection)
- provide debug information for react dev tools
- ensure updater callback function identities are stable and do not change on subsequent renders

# hooks

- [useCookie](./src/useCookie/)
- [useLocalStorage](./src/useLocalStorage/)
- [useMedia](./src/useMedia/)
- [useClickOutside](./src/useClickOutside/)
- [useIntrinsicAttributes](./src/useIntrinsicAttributes/)

# Usage

Use as any other npm package. Add react-panoply to your (runtime-) dependencies.

```
import { useLocalStorage } from 'react-panoply';

```

# TODOs
- add useMedia
- add useClickOutside
- add useIntrinsicAttributes
