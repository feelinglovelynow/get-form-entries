# 🕉 @feelinglovelynow/get-form-entries


## 💎 Install
```bash
pnpm add @feelinglovelynow/get-form-entries
```


## 🙏 Description
* Recieves Form Data and responds with an Object
* Converts `<input name="foo" value="bar" />` into `{ foo: 'bar' }`
* Converts `<input name="image" />` into `{ image: File }`
* Converts `<input name="images" multiple />` into `{ images: File[] }`
* If the input support multiple but only 1 file is uploaded => `{ image: File }`
* An array is used for a response value only if multiple files share the same form name (example below)


## 💚 Example
```ts
import loopBackwards from '@feelinglovelynow/get-form-entries'

const fields = getFormEntries(formData)
```


## 💛 Example: FormData (request)
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


## 🧡 Example: Fields (response)
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


## 🎁 All our NPM Packages
* [@feelinglovelynow/env-write](https://github.com/feelinglovelynow/env-write)
* [@feelinglovelynow/get-form-entries](https://github.com/feelinglovelynow/get-form-entries)
* [@feelinglovelynow/get-relative-time](https://github.com/feelinglovelynow/get-relative-time)
* [@feelinglovelynow/global-style](https://github.com/feelinglovelynow/global-style)
* [@feelinglovelynow/jwt](https://github.com/feelinglovelynow/jwt)
* [@feelinglovelynow/loop-backwards](https://github.com/feelinglovelynow/loop-backwards)
* [@feelinglovelynow/slug](https://github.com/feelinglovelynow/slug)
* [@feelinglovelynow/svelte-loading-anchor](https://github.com/feelinglovelynow/svelte-loading-anchor)
* [@feelinglovelynow/svelte-modal](https://github.com/feelinglovelynow/svelte-modal)
* [@feelinglovelynow/svelte-turnstile](https://github.com/feelinglovelynow/svelte-turnstile)
* [@feelinglovelynow/toast](https://github.com/feelinglovelynow/toast)
