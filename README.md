# @unction/fromIteratorToArray

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> IteratorType -> Array<mixed>

Takes an Iterator (SetIterator, MapIterator, etc) and turns it into an array.

``` javascript
fromIteratorToArray(new Set([1, 2, 3]).entries()) // [[1, 1], [2, 2], [3, 3]]
fromIteratorToArray(new Map([["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]).entries()) // [["aaa", "a"], ["bbb", "b"], ["ccc", "c"]]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/fromIteratorToArray.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/fromIteratorToArray.svg?maxAge=2592000&style=flat-square
