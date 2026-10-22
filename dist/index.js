"use strict";var e=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(v){throw (i=0, v)}};};var s=e(function(y,o){
var q=require('@stdlib/assert-is-number/dist').isPrimitive,p=require('@stdlib/math-base-assert-is-composite/dist');function f(r){return q(r)?p(r):!1}o.exports=f
});var t=e(function(R,c){
var b=require('@stdlib/assert-is-number/dist').isObject,O=require('@stdlib/math-base-assert-is-composite/dist');function j(r){return b(r)?O(r.valueOf()):!1}c.exports=j
});var a=e(function(g,n){
var x=s(),P=t();function C(r){return x(r)||P(r)}n.exports=C
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=a(),N=s(),d=t();m(u,"isPrimitive",N);m(u,"isObject",d);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
