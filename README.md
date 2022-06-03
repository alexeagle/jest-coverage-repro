Response to https://github.com/aspect-build/rules_js/issues/153

This reproduces Jest failing to gather coverage data from a filesystem laid out like Bazel does, but using only npm:

```
$ npm run repro

> repro
> cd bazel-out/arch/bin; jest --no-cache --no-watchman --ci --haste {\"enableSymlinks\":true} --config jest.config.js

 PASS  ./index.test.js
  ✓ it should work (1 ms)

----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |       0 |        0 |       0 |       0 |                   
 index.js       |       0 |        0 |       0 |       0 | 1-3               
 jest.config.js |       0 |        0 |       0 |       0 | 1-8               
----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.347 s
Ran all test suites.
```

If you run jest from the repository root it works as expected:

```
$ node_modules/.bin/jest --no-cache --no-watchman --ci --haste {\"enableSymlinks\":true} --config jest.config.js
 PASS  ./index.test.js
 PASS  bazel-out/arch/bin/index.test.js
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |   27.27 |       50 |      50 |   27.27 |                   
 index.js       |     100 |      100 |     100 |     100 |                   
 jest.config.js |       0 |        0 |       0 |       0 | 1-8               
----------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.595 s
Ran all test suites.
```