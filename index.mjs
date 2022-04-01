// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-composite@esm/index.mjs";var i=t.isPrimitive,r=s;var n=function(e){return!!i(e)&&r(e)},m=t.isObject,d=s;var o=function(e){return!!m(e)&&d(e.valueOf())},a=n,j=o;var l=e,u=function(e){return a(e)||j(e)},v=n,p=o;l(u,"isPrimitive",v),l(u,"isObject",p);var c=u;export{c as default,p as isObject,v as isPrimitive};
//# sourceMappingURL=index.mjs.map
