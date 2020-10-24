# Primitive Types

- Primitive values aren't object, and have no methods\*
- Six primitive types in JS:
  - null
  - underfined
  - boolean
  - number
  - string
  - symbol ES2015: the name of the symbol is equal to it's value
- Everything else extends from: Object
- Object is mutable values, everything else is immutable
- Auto-Boxing
  - When cnecessary, primitive types are "wrapped" by identically-named Objects, and then back to their primitive types again.

# Declaration:

- var declarations **ARE** hoisted, and **ARE NOT** block-scoped, belong to the function or global scope they're defined in
- let declarations **ARE NOT** hoisted, and **ARE** block-scoped, belong to the block scope they're defined in
- const declarations **ARE NOT** hoisted, re-assignment is not allowed, does NOT mean "immutable value"
- Recommended practice: for mutable values, use with Object.freeze

|          | var      | let   | const |
| -------- | -------- | ----- | ----- |
| Reassign | ✅       | ✅    |
| Scope    | function | block | block |
| hoisted  | ✅😫     |

# Type Conversion

- The + operator, when used with strings, converts all other operands to strings
  30 + 7; // 37 '37' + 7; // '377' '37' - 7; // 30
- the unary + operator converts the operand to a Number
  (+ '37'); // 37 (+ false); // 0

# Explict Typing:

- let x:number = 33;
- let input = document.querySelector('input#name_field') as HTMLInputElement;
- let input = <HTMLInputElement>document.querySelector('input#name_field'); // doesn't mix well with JSX

- function login(username: string, password: string) : User {}
- const login = (username: string, password: string) : User => {}

# Type Systems & Tupe Equivalence

- Nominal Type Systems & Structural Type Systems

# Class

- Enums, number of members Object.keys(Suit).length / 2

* Array, Tuples, Type Aliases, Getter & Setter
* Function
