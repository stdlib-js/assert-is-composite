// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,c=n.__lookupSetter__,f=r,a=function(t,e,r){var f,a,p,b;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(t,e)||c.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),p="get"in r,b="set"in r,a&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),b&&u&&u.call(t,e,r.set),t},p=e()?f:a,b=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},y=function(t){return"number"==typeof t},s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=function(){return s&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,d=m,v=function(t){return d.call(t)},j=Object.prototype.hasOwnProperty,g=function(t,e){return null!=t&&j.call(t,e)},h="function"==typeof Symbol?Symbol.toStringTag:"",S=g,O=h,w=m,P=v,T=function(t){var e,r,n;if(null==t)return w.call(t);r=t[O],e=S(t,O);try{t[O]=void 0}catch(e){return w.call(t)}return n=w.call(t),e?t[O]=r:delete t[O],n},I=_()?T:P,N=Number,E=N.prototype.toString,x=I,V=N,k=function(t){try{return E.call(t),!0}catch(t){return!1}},A=_(),C=function(t){return"object"==typeof t&&(t instanceof V||(A?k(t):"[object Number]"===x(t)))},F=y,G=C,M=b,q=function(t){return F(t)||G(t)},Y=C;M(q,"isPrimitive",y),M(q,"isObject",Y);var z=q,B=Math.sqrt,D=Math.floor,H=B,J=D,K={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0},L=function(t){var e,r;if(J(t)!==t)return!1;if(t<=3)return t>1;if(t>9007199254740991||t%2==0)return!1;if(t<9)return!0;if(t%3==0)return!1;if(t%5==0)return!1;if(t%7==0)return!1;if(K[t])return!0;for(e=J(H(t)),r=11;r<=e;r+=210)if(t%r==0||t%(r+2)==0||t%(r+6)==0||t%(r+8)==0||t%(r+12)==0||t%(r+18)==0||t%(r+20)==0||t%(r+26)==0||t%(r+30)==0||t%(r+32)==0||t%(r+36)==0||t%(r+42)==0||t%(r+48)==0||t%(r+50)==0||t%(r+56)==0||t%(r+60)==0||t%(r+62)==0||t%(r+68)==0||t%(r+72)==0||t%(r+78)==0||t%(r+86)==0||t%(r+90)==0||t%(r+92)==0||t%(r+96)==0||t%(r+98)==0||t%(r+102)==0||t%(r+110)==0||t%(r+116)==0||t%(r+120)==0||t%(r+126)==0||t%(r+128)==0||t%(r+132)==0||t%(r+138)==0||t%(r+140)==0||t%(r+146)==0||t%(r+152)==0||t%(r+156)==0||t%(r+158)==0||t%(r+162)==0||t%(r+168)==0||t%(r+170)==0||t%(r+176)==0||t%(r+180)==0||t%(r+182)==0||t%(r+186)==0||t%(r+188)==0||t%(r+198)==0||t%(r+200)==0)return!1;return!0},Q=D,R=function(t){return Q(t)===t},U=Number.POSITIVE_INFINITY,W=L,X=R,Z=U,$=function(t){return X(t)&&t>1&&t!==Z&&!1===W(t)};function tt(t){return!!z.isPrimitive(t)&&$(t)}function et(t){return!!z.isObject(t)&&$(t.valueOf())}function rt(t){return tt(t)||et(t)}return b(rt,"isPrimitive",tt),b(rt,"isObject",et),rt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isComposite=e();
//# sourceMappingURL=index.js.map
