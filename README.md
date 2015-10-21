
# Permutest

Permutest is a testing utility that makes the testing of all possible combinations/permuations of multiple variables much saner and clean.

```bash
npm install permutest
```

Permutest is independent of any testing framework or library and can be used for other things besides testing as well.

## Example

```js
var assert = require('assert');
var permutest = require('permutest');

permutest(function(set) {
  var firstName = set(["Chris", "Kevin"]);
  var lastName = set(["Andrejewski", "Undisclosed", "Withheld"]);
  var fullName = firstName + " " + lastName;
  assert(nameIsLongEnough(fullName));
});
```

The above is equivalent to the following.

```js
var assert = require('assert');

var firstName = "Chris";
var lastName = "Andrejewski";
var fullName = firstName + " " + lastName;
assert(nameIsLongEnough(fullName));

var firstName = "Chris";
var lastName = "Undisclosed";
var fullName = firstName + " " + lastName;
assert(nameIsLongEnough(fullName));

var firstName = "Chris";
var lastName = "Withheld";
var fullName = firstName + " " + lastName;
assert(nameIsLongEnough(fullName));

var firstName = "Kevin";
var lastName = "Andrejewski";
var fullName = firstName + " " + lastName;
assert(nameIsLongEnough(fullName));

var firstName = "Kevin";
var lastName = "Undisclosed";
var fullName = firstName + " " + lastName;
assert(nameIsLongEnough(fullName));

var firstName = "Kevin";
var lastName = "Withheld";
var fullName = firstName + " " + lastName;
assert(nameIsLongEnough(fullName));
```

But who the heck would want to write and maintain that instead of just using Permutest.

## TODO

The only feature that I would like to add to the Permutest package is a static analysis and compilation tool that expands out Permutest tests into their long and tedious forms. This would involve writing a command-line script and generating the AST to find calls to `permutest()` and so on from there to generate the test code in place. This would be useful for inspecting individual test cases.

## Contributing

We can always have more tests: if you find a bug, create an issue or be **fabulous** and fix the problem and write the tests up yourself in a coherent pull request.

Run tests with the `npm test` command.

Please check out my other [repositories](https://github.com/andrejewski) if I have earned it. I thank you for reading.

