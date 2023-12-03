# 🕉 @feelinglovelynow/get-form-entries


## 💎 Install
```bash
pnpm add @feelinglovelynow/get-form-entries
```

## 🤓 Unit Tests
![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg?style=flat)


## 🙏 Description
* Recieves Form Data and responds with an Object
* Converts `<input name="foo" value="bar" />` into `{ foo: 'bar' }`
* Converts `<input name="image" />` into `{ image: File }`
* Converts `<input name="images" multiple />` into `{ images: File[] }`
* If the input support multiple but only 1 file is uploaded => `{ image: File }`
* An array is used for a response value only if multiple files share the same form name (example below)


## 💚 Example
* Implementation
```ts
import { getFormEntries } from '@feelinglovelynow/get-form-entries'

const fields = getFormEntries(formData)
```
* formData
```
  FormData <entries>
    0: message → "Hello World!"
​​    1: images → File
​​​     <key>: "images"
​​​     <value>: File
​​    2: images → File
​​​     <key>: "images"
​​​     <value>: File
​​    3: images → File
​​​     <key>: "images"
​​     <value>: File
```
* Response from `getFormEntries(formData)`
```ts
{
  message: 'Hello World!',
  images: [
    File {
      size: 93146,
      type: 'image/jpeg',
      name: 'glew-fl.jpg',
      lastModified: 1683003052322
    },
    File {
      size: 64056,
      type: 'image/jpeg',
      name: 'violet flame.jpg',
      lastModified: 1683003052322
    },
    File {
      size: 46030,
      type: 'image/jpeg',
      name: 'violet-flame.jpg',
      lastModified: 1683003052323
    }
  ]
}
```

## 🔥 Errors we may throw
* `getFormEntries()`
```ts
if (!(data instanceof FormData)) throw { id: 'fln__get-form-entries__invalid-data', message: 'Please pass getFormEntries() FormData', _errorData: { data } }
```


## 🎁 All Our Packages
1. @feelinglovelynow/datetime-local: [NPM](https://www.npmjs.com/package/@feelinglovelynow/datetime-local) ⋅ [Github](https://github.com/feelinglovelynow/datetime-local)
1. @feelinglovelynow/dgraph: [NPM](https://www.npmjs.com/package/@feelinglovelynow/dgraph) ⋅ [Github](https://github.com/feelinglovelynow/dgraph)
1. @feelinglovelynow/env-write: [NPM](https://www.npmjs.com/package/@feelinglovelynow/env-write) ⋅ [Github](https://github.com/feelinglovelynow/env-write)
1. @feelinglovelynow/get-form-entries: [NPM](https://www.npmjs.com/package/@feelinglovelynow/get-form-entries) ⋅ [Github](https://github.com/feelinglovelynow/get-form-entries)
1. @feelinglovelynow/get-relative-time: [NPM](https://www.npmjs.com/package/@feelinglovelynow/get-relative-time) ⋅ [Github](https://github.com/feelinglovelynow/get-relative-time)
1. @feelinglovelynow/global-style: [NPM](https://www.npmjs.com/package/@feelinglovelynow/global-style) ⋅ [Github](https://github.com/feelinglovelynow/global-style)
1. @feelinglovelynow/jwt: [NPM](https://www.npmjs.com/package/@feelinglovelynow/jwt) ⋅ [Github](https://github.com/feelinglovelynow/jwt)
1. @feelinglovelynow/loop-backwards: [NPM](https://www.npmjs.com/package/@feelinglovelynow/loop-backwards) ⋅ [Github](https://github.com/feelinglovelynow/loop-backwards)
1. @feelinglovelynow/slug: [NPM](https://www.npmjs.com/package/@feelinglovelynow/slug) ⋅ [Github](https://github.com/feelinglovelynow/slug)
1. @feelinglovelynow/svelte-catch: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-catch) ⋅ [Github](https://github.com/feelinglovelynow/svelte-catch)
1. @feelinglovelynow/svelte-kv: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-kv) ⋅ [Github](https://github.com/feelinglovelynow/svelte-kv)
1. @feelinglovelynow/svelte-loading-anchor: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-loading-anchor) ⋅ [Github](https://github.com/feelinglovelynow/svelte-loading-anchor)
1. @feelinglovelynow/svelte-modal: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-modal) ⋅ [Github](https://github.com/feelinglovelynow/svelte-modal)
1. @feelinglovelynow/svelte-turnstile: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-turnstile) ⋅ [Github](https://github.com/feelinglovelynow/svelte-turnstile)
1. @feelinglovelynow/toast: [NPM](https://www.npmjs.com/package/@feelinglovelynow/toast) ⋅ [Github](https://github.com/feelinglovelynow/toast)
