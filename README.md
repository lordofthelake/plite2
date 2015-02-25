# plite2

Tiny, light-weight JavaScript promises. Fork of [Chris Davies' Plite](https://github.com/chrisdavies/plite), to make it compatible with NPM/Browserify and allow combination of multiple promises (`Plite.all()`). 

Note that Alite has been removed from the package. Please refer to the original repo if you need that.


## Usage

Require `plite2`

```javascript
var Plite = require('plite2');
```

Create a promise:

```javascript
var p = new Plite();
```

Resolve a promise:

```javascript
p.resolve('Hey, that was successful!');
```

Reject a promise:
```javascript
p.reject('Utter failure.');
```

Chain stuff along:

```javascript
p.then(function (msg) {
    return msg + ' on ' + new Date().toString();
}).then(function (msg) {
    alert('GOOD: ' + msg);
}).catch(function (err) {
    alert('ERR: ' + err);
}).finally(function () {
    alert('All done!');
});
```

Combine promises:

```javascript
var p1 = new Plite();
var p2 = new Plite();

setTimeout(function () {
  p1.resolve();
}, 1000);

setTimeout(function () {
  p2.resolve();
}, 2000);

Plite.all([p1, p2]).then(function () {
  alert("All done!");
});
```

## Limitations
This is a very simple implementation. It is intended to be used to chain promises, resolve, and reject. It really isn't intended for any other use. It does what I need a promise to do, and no more...


## License
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

