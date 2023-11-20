# 1k-types

> TypeScript's largest type utility library

## Prerequisites

```sh
npm install typescript@^5.1.3 --save-dev
```

## Installation

```sh
npm install 1k-types
```

## Use

```ts
import { ArrayValues, At, PickByType } from '1k-types'
type valuesType = At<ArrayValues<[{ a: string; b: number; c: { a: string } }]>, 'c'> // { a: string }
type test =  PickByType<{ a: string; b: number; c: { a: string } }, string> // { a: string }
```
