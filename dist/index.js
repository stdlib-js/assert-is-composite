"use strict";var e=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var s=e(function(l,o){
var v=require('@stdlib/assert-is-number/dist').isPrimitive,q=require('@stdlib/math-base-assert-is-composite/dist');function p(r){return v(r)?q(r):!1}o.exports=p
});var t=e(function(y,c){
var f=require('@stdlib/assert-is-number/dist').isObject,b=require('@stdlib/math-base-assert-is-composite/dist');function O(r){return f(r)?b(r.valueOf()):!1}c.exports=O
});var a=e(function(R,n){
var j=s(),x=t();function P(r){return j(r)||x(r)}n.exports=P
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=a(),C=s(),N=t();m(u,"isPrimitive",C);m(u,"isObject",N);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
