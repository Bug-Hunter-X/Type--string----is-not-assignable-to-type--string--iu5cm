# Type 'string[]' is not assignable to type 'string'
This repository contains a TypeScript bug demonstrating a type error where a string array is passed to a function expecting a single string argument.  The bug occurs because the function `greeter` expects a single string, but it's provided with an array of strings.  The solution demonstrates how to correctly handle this scenario.