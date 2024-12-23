// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function w(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":s(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=u.call(i,y,"$1e"),i=u.call(i,v,"e"),i=u.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=u.call(i,f,"e+0$1"),i=u.call(i,g,"e-0$1"),r.alternate&&(i=u.call(i,d,"$1."),i=u.call(i,h,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===p.call(r.specifier)?p.call(i):l.call(i)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function E(r){return r!=r}function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,i,a,o,s,l,p,u,f,g,d,h;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,p=0;p<r.length;p++)if(i=r[p],"string"==typeof i)s+=i;else{if(e=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,E(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),s+=i.arg||"",l+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function O(r){var e,t,i,n;for(t=[],n=0,i=j.exec(r);i;)(e=r.slice(n,j.lastIndex-i[0].length)).length&&t.push(e),t.push(I(i)),n=j.lastIndex,i=j.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[O(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var V=Object.prototype,F=V.toString,P=V.__defineGetter__,$=V.__defineSetter__,A=V.__lookupGetter__,C=V.__lookupSetter__;var R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(A.call(r,e)||C.call(r,e)?(i=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&$&&$.call(r,e,t.set),r};function N(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return G&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";var q=W()?function(r){var e,t,i,n,a;if(null==r)return L.call(r);t=r[X],a=X,e=null!=(n=r)&&M.call(n,a);try{r[X]=void 0}catch(e){return L.call(r)}return i=L.call(r),e?r[X]=t:delete r[X],i}:function(r){return L.call(r)},z=Number,Y=z.prototype.toString;var B=W();function D(r){return"object"==typeof r&&(r instanceof z||(B?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function H(r){return Z(r)||D(r)}N(H,"isPrimitive",Z),N(H,"isObject",D);var J=Math.sqrt,K=Math.floor,Q=9007199254740991,rr={11:!0,13:!0,17:!0,19:!0,23:!0,29:!0,31:!0,37:!0,41:!0,43:!0,47:!0,53:!0,59:!0,61:!0,67:!0,71:!0,73:!0,79:!0,83:!0,89:!0,97:!0,101:!0,103:!0,107:!0,109:!0,113:!0,127:!0,131:!0,137:!0,139:!0,149:!0,151:!0,157:!0,163:!0,167:!0,173:!0,179:!0,181:!0,191:!0,193:!0,197:!0,199:!0,211:!0};var er=Number.POSITIVE_INFINITY;function tr(r){return function(r){return K(r)===r}(r)&&r>1&&r!==er&&!1===function(r){var e,t;if(K(r)!==r)return!1;if(r<=3)return r>1;if(r>Q||r%2==0)return!1;if(r<9)return!0;if(r%3==0)return!1;if(r%5==0)return!1;if(r%7==0)return!1;if(rr[r])return!0;for(e=K(J(r)),t=11;t<=e;t+=210)if(r%t==0||r%(t+2)==0||r%(t+6)==0||r%(t+8)==0||r%(t+12)==0||r%(t+18)==0||r%(t+20)==0||r%(t+26)==0||r%(t+30)==0||r%(t+32)==0||r%(t+36)==0||r%(t+42)==0||r%(t+48)==0||r%(t+50)==0||r%(t+56)==0||r%(t+60)==0||r%(t+62)==0||r%(t+68)==0||r%(t+72)==0||r%(t+78)==0||r%(t+86)==0||r%(t+90)==0||r%(t+92)==0||r%(t+96)==0||r%(t+98)==0||r%(t+102)==0||r%(t+110)==0||r%(t+116)==0||r%(t+120)==0||r%(t+126)==0||r%(t+128)==0||r%(t+132)==0||r%(t+138)==0||r%(t+140)==0||r%(t+146)==0||r%(t+152)==0||r%(t+156)==0||r%(t+158)==0||r%(t+162)==0||r%(t+168)==0||r%(t+170)==0||r%(t+176)==0||r%(t+180)==0||r%(t+182)==0||r%(t+186)==0||r%(t+188)==0||r%(t+198)==0||r%(t+200)==0)return!1;return!0}(r)}function ir(r){return!!Z(r)&&tr(r)}function nr(r){return!!D(r)&&tr(r.valueOf())}function ar(r){return ir(r)||nr(r)}N(ar,"isPrimitive",ir),N(ar,"isObject",nr);export{ar as default,nr as isObject,ir as isPrimitive};
//# sourceMappingURL=mod.js.map