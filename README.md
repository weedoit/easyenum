# @weedoit/easyenum

`@weedoit/easyenum` is a TypeScript utility function that allows you to create enum-like structures using plain objects. It provides a type-safe and flexible alternative to TypeScript's built-in enums, and is ideal for scenarios where you need to define a limited set of string values as constants.

## Installation

You can install `@weedoit/easyenum` using npm:

```bash
npm install @weedoit/easyenum
```

## Usage

To use `EasyEnum`, simply import the function from the `@weedoit/easyenum` module and call it with a list of string values:

```typescript
import { EasyEnum } from '@weedoit/easyenum';

const UserRole = EasyEnum('ADMIN', 'CLIENT', 'SYSTEM');
```

This will return an object with properties that correspond to the string values passed to EasyEnum. The properties are set to the same value as their name.

You can use the resulting object like an enum:

```typescript
function doSomething(value: keyof typeof UserRole) {
  // ...
}

doSomething(UserRole.ADMIN);
```

Note that the properties of the object returned by EasyEnum are of type keyof typeof UserRole, which is a union of the string literal types that correspond to the keys of the object. This ensures that you can only pass valid enum values to functions that accept them.

License
@weedoit/easyenum is licensed under the MIT License. See the LICENSE file for details.
