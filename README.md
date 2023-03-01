<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isComposite

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a composite number.

<section class="intro">

A **composite number** is defined as a positive integer value greater than `1` which has **at least** one divisor other than `1` and itself (i.e., an integer value which can be formed by multiplying two smaller positive integers).

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import isComposite from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-composite@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { isObject, isPrimitive } from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-composite@deno/mod.js';
```

#### isComposite( value )

Tests if a `value` is a composite number.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

var bool = isComposite( 4.0 );
// returns true

bool = isComposite( new Number( 4.0 ) );
// returns true

bool = isComposite( 3.14 );
// returns false

bool = isComposite( -4.0 );
// returns false

bool = isComposite( NaN );
// returns false

bool = isComposite( null );
// returns false
```

#### isComposite.isPrimitive( value )

Tests if a `value` is a primitive composite number.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

var bool = isComposite.isPrimitive( 4.0 );
// returns true

bool = isComposite.isPrimitive( new Number( 4.0 ) );
// returns false
```

#### isComposite.isObject( value )

Tests if a `value` is a `Number` object having a value which is a composite number.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

var bool = isComposite.isObject( 4.0 );
// returns false

bool = isComposite.isObject( new Number( 4.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';
import isComposite from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-composite@deno/mod.js';

var bool = isComposite( 4.0 );
// returns true

bool = isComposite( new Number( 4.0 ) );
// returns true

bool = isComposite( 10.0 );
// returns true

bool = isComposite( 7.0 );
// returns false

bool = isComposite( 3.14 );
// returns false

bool = isComposite( -4.0 );
// returns false

bool = isComposite( NaN );
// returns false

bool = isComposite( '0.5' );
// returns false

bool = isComposite( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-integer`][@stdlib/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having an integer value.</span>
-   <span class="package-name">[`@stdlib/assert-is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>
-   <span class="package-name">[`@stdlib/assert-is-prime`][@stdlib/assert/is-prime]</span><span class="delimiter">: </span><span class="description">test if a value is a prime number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-composite.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-composite

[test-image]: https://github.com/stdlib-js/assert-is-composite/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-composite/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-composite/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-composite?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-composite.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-composite/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-composite/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-composite/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-composite/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-composite/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-composite/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert-is-integer/tree/deno

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert-is-number/tree/deno

[@stdlib/assert/is-prime]: https://github.com/stdlib-js/assert-is-prime/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
