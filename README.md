## TypeScript Guide

**1. Typescript basics and basics types**

- (string, number, boolean) types
- type assignment and type inference
- object types
- arrays
- tuple
- enum
- union types
- literal type
- type aliases
- function return types and void
- function types and callback
- unknown type
- never type

**2. Typescript compiler and configuration**

- watch mode
  ```
  tsc app.ts --watch
  ```
- initialize typeScript project
  ```
  npx tsc --init
  ```
- exclude and include (tsconfig.json)
  ```json
  {
    "exclude": [
      "src/analytics.ts",
      "**/*.dev.ts",
      "node_modules" // would be the default
    ]
  }
  ```
- compilation target (tsconfig.json)
- rootDir and outDir (tsconfig.json)
- docs: [What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) , [Compiler Config Docs](https://www.typescriptlang.org/docs/handbook/compiler-options.html), [TS Debugging](https://code.visualstudio.com/docs/typescript/typescript-debugging)

**3. Classes and Interfaces**

- constructor function and "this" keyword
- private and public access modifiers
- shorthand initialization
- "readonly" properties
- inheritance
- getters and setters
- static method and properties
- abstract classes
- singletons and private constructor
- interfaces
- "readonly" interface properties
- extending properties
- extending interfaces
- interface as function type
- optional parameters
- docs: [TS Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html) , [JS Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes),

**4. Advanced Types**

- intersection types
- type guard
- discriminated unions
- type casting
- index properties
- function overloads
- optional chaining
- nullish coalescing

**5. Generics**

- generic function
- constraints
- "keyof" constraints
- generic classes
- generic utility types: [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)
- docs: [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

**6. Decorators**

- classes decorators
- decorator factories
- property decorator
- access decorator
- parameter decorator
- "autobind" decorator
- validation with decorator
- docs: [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

**7. Drag and Drop Project**

- namespace
- es modules

**8. Webpack**
**9. Node.js and Express with TypeScript**
