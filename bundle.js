// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).ctors=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var c=r,f=function(t,e,r){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&a&&a.call(t,e,r.set),t},p=e()?c:f,y=p;var m=function(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})};var b=function(t){return"number"==typeof t};var s=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var v=function(){return s&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,d=h;var _=function(t){return d.call(t)},w=Object.prototype.hasOwnProperty;var E=function(t,e){return null!=t&&w.call(t,e)},g="function"==typeof Symbol?Symbol.toStringTag:"",T=E,S=g,j=h;var P=_,N=function(t){var e,r,n;if(null==t)return j.call(t);r=t[S],e=T(t,S);try{t[S]=void 0}catch(e){return j.call(t)}return n=j.call(t),e?t[S]=r:delete t[S],n},O=v()?N:P,A=Number,F=A.prototype.toString;var x=O,I=A,V=function(t){try{return F.call(t),!0}catch(t){return!1}},L=v();var M=function(t){return"object"==typeof t&&(t instanceof I||(L?V(t):"[object Number]"===x(t)))},R=b,C=M;var Y=m,k=function(t){return R(t)||C(t)},B=M;Y(k,"isPrimitive",b),Y(k,"isObject",B);var G=k,J="function"==typeof Math.fround?Math.fround:null,q=O,z="function"==typeof Float32Array;var D=function(t){return z&&t instanceof Float32Array||"[object Float32Array]"===q(t)},H=Number.POSITIVE_INFINITY,K="function"==typeof Float32Array?Float32Array:null,Q=D,U=H,W=K;var X="function"==typeof Float32Array?Float32Array:void 0,Z=function(){throw new Error("not implemented")},$=new(function(){var t,e;if("function"!=typeof W)return!1;try{e=new W([1,3.14,-3.14,5e40]),t=Q(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===U}catch(e){t=!1}return t}()?X:Z)(1);var tt=J;"function"!=typeof tt&&(tt=function(t){return $[0]=t,$[0]});var et=G.isPrimitive,rt=p,nt=m,ot=tt,it=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},at=function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t};function ut(t,e){if(!(this instanceof ut))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!et(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!et(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return rt(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ot(t)}),rt(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ot(e)}),this}nt(ut,"BYTES_PER_ELEMENT",4),nt(ut.prototype,"BYTES_PER_ELEMENT",4),nt(ut.prototype,"byteLength",8),nt(ut.prototype,"toString",it),nt(ut.prototype,"toJSON",at);var lt=ut;var ct=G.isPrimitive,ft=p,pt=m,yt=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},mt=function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t};function bt(t,e){if(!(this instanceof bt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ct(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!ct(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return ft(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),ft(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}pt(bt,"BYTES_PER_ELEMENT",8),pt(bt.prototype,"BYTES_PER_ELEMENT",8),pt(bt.prototype,"byteLength",16),pt(bt.prototype,"toString",yt),pt(bt.prototype,"toJSON",mt);var st={complex64:lt,complex128:bt};return function(t){return st[t]||null}}));
//# sourceMappingURL=bundle.js.map
