# Jest Coverage Path Issue

## Setup

```
npm install
npm test
```

## Actual

```
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------|---------|----------|---------|---------|-------------------
All files     |      50 |      100 |      50 |      50 |                   
 Foo          |     100 |      100 |     100 |     100 |                   
  add.js      |     100 |      100 |     100 |     100 |                   
 Foobar       |       0 |      100 |       0 |       0 |                   
  subtract.js |       0 |      100 |       0 |       0 | 2                 
--------------|---------|----------|---------|---------|-------------------
Jest: "src/Foo/" coverage threshold for statements (100%) not met: 50%
Jest: "src/Foo/" coverage threshold for lines (100%) not met: 50%
Jest: "src/Foo/" coverage threshold for functions (100%) not met: 50%
```

## Expected

Coverage for `src/Foo/` should pass since coverage is `100%`.

## Explanation

`testCoverage` path matchers will match more than expected.

```js
coverageThreshold: {
    'src/Foo/': {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
    }
}
```

Will match both `src/Foo/` and `src/Foobar/` directories.

The ending `/` is ignored due to https://github.com/facebook/jest/blob/fdc74af37235354e077edeeee8aa2d1a4a863032/packages/jest-reporters/src/CoverageReporter.ts#L281


