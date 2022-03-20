# metriqa

Measurement units management made easy and well-typed :sparkles:

## Installation

`npm i metriqa`

## Usage

First of all, import the needed functions from the library:

```ts
import { unit, measurement } from 'metriqa'
```

Second, define a measurement. For demonstration purpose, let's define a
measurement for information:

```ts
const information = measurement(
  unit('bit'), // the base measurement unit
  unit('byte', 8), // this number represents how many bits are in a byte
  unit('kibibyte', 1024), // ... how many bytes are in a kibibyte
  unit('mebibyte', 1024), // ... how many kibibytes are in a mebibyte
  // and so on
)
```

And finally, we can define some quantity of or measurement and convert in back
and forth!

```ts
const _512bytes = information(512, 'byte')

_512bytes.in('bit') // 4096
_512bytes.in('kibibyte') // 0.5
```

Notice that this API is well-typed. Whenever you type `_512bytes.in(` TS will
infer the type of the argument as
`'bit' | 'byte' | 'kibibyte' | 'mebibyte' | ...`

There is also a `toString` method of a quantity:

```ts
const _512bytes = information(512, 'byte')

_512bytes.toString() // 512 byte
_512bytes.toString('bit') // 4096 bit
```

## Contributing

Please feel free to open issues and pull requests in any form.

Build

```
npm run build
```

Test (using vitest)

```
npm run test
```
