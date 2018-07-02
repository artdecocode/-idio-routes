# @idio/routes

[![npm version](https://badge.fury.io/js/@idio/routes.svg)](https://npmjs.org/package/@idio/routes)

`@idio/routes` is a new Node.js npm package. Routes functionality for the idio server including hot-route-reload.

```sh
yarn add -E @idio/routes
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`idioRoutes(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)

## API

The package is available by importing its default function:

```js
import idioRoutes from '@idio/routes'
```

### `idioRoutes(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

```js
/* yarn example */
import idioRoutes from '@idio/routes'

(async () => {
  await idioRoutes()
})()
```

---

(c) [Art Deco Code][1] 2018

[1]: https://artdeco.bz
