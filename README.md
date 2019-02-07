ts-using
========
A TypeScript/JavaScript module for adding *using* function. This is known as a
data provider, eg. in [jasmine-data-provider](https://www.npmjs.com/package/jasmine-data-provider). 
Unfortunately, this is using the "require"-syntax. With this module you can use 
the known simple "import".

Usage
-----
Add the import statement for the import function.

``import {using} from '@web-devil/ts-using'``

Use it as a data provider for your test.

``using([//data], (args) => {it(...);}``

Full example:

```typescript
import {using} from '@web-devil/ts-using';
import { BarPipe } from './bar.pipe';

describe('BarPipe', () => {
  using([
    ['single bar', 'foo bar', 'bar'],
    ['multiple bar', 'bar bar', 'bar bar'],
    // more cases easily added ...
  ], (testCase, inputValue, expectedValue) => {
    it('only returns "bar" in a string: ' + testCase, () => {
      const pipe = new BarPipe();

      expect(pipe.transform(inputValue)).toBe(expectedValue);
    });
  });
});
```

Installation
------------
Install package from npm-registry

``npm install @web-devil/ts-using -D``

That's it!