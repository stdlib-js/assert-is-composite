// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,f=n.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,a,p,b;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(e,t)||f.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,b="set"in r,a&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),b&&u&&u.call(e,t,r.set),e};function a(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){return"number"==typeof e}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return b&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,_=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",m=y()?function(e){var t,r,n,o,i;if(null==e)return s.call(e);r=e[d],i=d,t=null!=(o=e)&&_.call(o,i);try{e[d]=void 0}catch(t){return s.call(e)}return n=s.call(e),t?e[d]=r:delete e[d],n}:function(e){return s.call(e)},v=Number,j=v.prototype.toString,g=y();function h(e){return"object"==typeof e&&(e instanceof v||(g?function(e){try{return j.call(e),!0}catch(e){return!1}}(e):"[object Number]"===m(e)))}function O(e){return p(e)||h(e)}a(O,"isPrimitive",p),a(O,"isObject",h);var S=Math.sqrt,P=Math.floor,w={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0},T=Number.POSITIVE_INFINITY;function I(e){return function(e){return P(e)===e}(e)&&e>1&&e!==T&&!1===function(e){var t,r;if(P(e)!==e)return!1;if(e<=3)return e>1;if(e>9007199254740991||e%2==0)return!1;if(e<9)return!0;if(e%3==0)return!1;if(e%5==0)return!1;if(e%7==0)return!1;if(w[e])return!0;for(t=P(S(e)),r=11;r<=t;r+=210)if(e%r==0||e%(r+2)==0||e%(r+6)==0||e%(r+8)==0||e%(r+12)==0||e%(r+18)==0||e%(r+20)==0||e%(r+26)==0||e%(r+30)==0||e%(r+32)==0||e%(r+36)==0||e%(r+42)==0||e%(r+48)==0||e%(r+50)==0||e%(r+56)==0||e%(r+60)==0||e%(r+62)==0||e%(r+68)==0||e%(r+72)==0||e%(r+78)==0||e%(r+86)==0||e%(r+90)==0||e%(r+92)==0||e%(r+96)==0||e%(r+98)==0||e%(r+102)==0||e%(r+110)==0||e%(r+116)==0||e%(r+120)==0||e%(r+126)==0||e%(r+128)==0||e%(r+132)==0||e%(r+138)==0||e%(r+140)==0||e%(r+146)==0||e%(r+152)==0||e%(r+156)==0||e%(r+158)==0||e%(r+162)==0||e%(r+168)==0||e%(r+170)==0||e%(r+176)==0||e%(r+180)==0||e%(r+182)==0||e%(r+186)==0||e%(r+188)==0||e%(r+198)==0||e%(r+200)==0)return!1;return!0}(e)}function N(e){return!!p(e)&&I(e)}function x(e){return!!h(e)&&I(e.valueOf())}function E(e){return N(e)||x(e)}a(E,"isPrimitive",N),a(E,"isObject",x),e.default=E,e.isObject=x,e.isPrimitive=N,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).isComposite={});
//# sourceMappingURL=browser.js.map
