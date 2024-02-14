// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function l(e){return"string"==typeof e}var s=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,m,"$1e"),i=f.call(i,v,"e"),i=f.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,h,"e-0$1"),e.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var S=String.fromCharCode,x=isNaN,k=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,i,a,o,s,p,u,f;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))s+=i;else{if(r=void 0!==i.precision,!(i=T(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,x(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!x(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=E(i.arg,i.width,i.padRight)),s+=i.arg||"",p+=1}return s}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,i,n;for(t=[],n=0,i=V.exec(e);i;)(r=e.slice(n,V.lastIndex-i[0].length)).length&&t.push(r),t.push(F(i)),n=V.lastIndex,i=V.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function A(e){return"string"==typeof e}function O(e){var r,t;if(!A(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return j.apply(null,r)}var $=Object.prototype,C=$.toString,P=$.__defineGetter__,R=$.__defineSetter__,N=$.__lookupGetter__,L=$.__lookupSetter__;var Z=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(e,r)||L.call(e,r)?(i=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};function G(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(e){return"number"==typeof e}function W(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var Y=W();function B(){return Y&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function z(e,r){return null!=e&&X.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var D=B()?function(e){var r,t,i;if(null==e)return U.call(e);t=e[q],r=z(e,q);try{e[q]=void 0}catch(r){return U.call(e)}return i=U.call(e),r?e[q]=t:delete e[q],i}:function(e){return U.call(e)},H=Number,K=H.prototype.toString;var Q=B();function ee(e){return"object"==typeof e&&(e instanceof H||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function re(e){return M(e)||ee(e)}G(re,"isPrimitive",M),G(re,"isObject",ee);var te="function"==typeof Math.fround?Math.fround:null,ie=W();var ne=Object.prototype.toString;var ae="function"==typeof Symbol?Symbol:void 0,oe="function"==typeof ae?ae.toStringTag:"";var ce=ie&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return ne.call(e);t=e[oe],r=z(e,oe);try{e[oe]=void 0}catch(r){return ne.call(e)}return i=ne.call(e),r?e[oe]=t:delete e[oe],i}:function(e){return ne.call(e)},le="function"==typeof Float32Array;var se=Number.POSITIVE_INFINITY,pe="function"==typeof Float32Array?Float32Array:null;var ue="function"==typeof Float32Array?Float32Array:void 0;var fe=new(function(){var e,r,t;if("function"!=typeof pe)return!1;try{r=new pe([1,3.14,-3.14,5e40]),t=r,e=(le&&t instanceof Float32Array||"[object Float32Array]"===ce(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===se}catch(r){e=!1}return e}()?ue:function(){throw new Error("not implemented")})(1);var ge="function"==typeof te?te:function(e){return fe[0]=e,fe[0]};function he(e,r){if(!(this instanceof he))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!M(e))throw new TypeError(O("invalid argument. Real component must be a number. Value: `%s`.",e));if(!M(r))throw new TypeError(O("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ge(e)}),Z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ge(r)}),this}G(he,"BYTES_PER_ELEMENT",4),G(he.prototype,"BYTES_PER_ELEMENT",4),G(he.prototype,"byteLength",8),G(he.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),G(he.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var de="function"==typeof Object.defineProperty?Object.defineProperty:null;var be=Object.defineProperty;function ye(e){return"number"==typeof e}function ve(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function me(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ve(n):ve(n)+e,i&&(e="-"+e)),e}var we=String.prototype.toLowerCase,_e=String.prototype.toUpperCase;function Ee(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ye(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=me(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=me(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===_e.call(e.specifier)?_e.call(t):we.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Se(e){return"string"==typeof e}var xe=Math.abs,ke=String.prototype.toLowerCase,Te=String.prototype.toUpperCase,je=String.prototype.replace,Ve=/e\+(\d)$/,Fe=/e-(\d)$/,Ie=/^(\d+)$/,Ae=/^(\d+)e/,Oe=/\.0$/,$e=/\.0*e/,Ce=/(\..*[^0])0*e/;function Pe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ye(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":xe(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=je.call(t,Ce,"$1e"),t=je.call(t,$e,"e"),t=je.call(t,Oe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=je.call(t,Ve,"e+0$1"),t=je.call(t,Fe,"e-0$1"),e.alternate&&(t=je.call(t,Ie,"$1."),t=je.call(t,Ae,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Te.call(e.specifier)?Te.call(t):ke.call(t)}function Re(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ne(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Re(i):Re(i)+e}var Le=String.fromCharCode,Ze=isNaN,Ge=Array.isArray;function Me(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function We(e){var r,t,i,n,a,o,c,l,s;if(!Ge(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,l=0;l<e.length;l++)if(Se(i=e[l]))o+=i;else{if(r=void 0!==i.precision,!(i=Me(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,s=0;s<t.length;s++)switch(n=t.charAt(s)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ze(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ze(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Ee(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ze(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ze(a)?String(i.arg):Le(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Pe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=me(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ne(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ye=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Be(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ue(e){var r,t,i,n;for(t=[],n=0,i=Ye.exec(e);i;)(r=e.slice(n,Ye.lastIndex-i[0].length)).length&&t.push(r),t.push(Be(i)),n=Ye.lastIndex,i=Ye.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Xe(e){return"string"==typeof e}function ze(e){var r,t;if(!Xe(e))throw new TypeError(ze("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ue(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return We.apply(null,r)}var Je=Object.prototype,qe=Je.toString,De=Je.__defineGetter__,He=Je.__defineSetter__,Ke=Je.__lookupGetter__,Qe=Je.__lookupSetter__;var er=function(){try{return de({},"x",{}),!0}catch(e){return!1}}()?be:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===qe.call(e))throw new TypeError(ze("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===qe.call(t))throw new TypeError(ze("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Ke.call(e,r)||Qe.call(e,r)?(i=e.__proto__,e.__proto__=Je,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&De&&De.call(e,r,t.get),o&&He&&He.call(e,r,t.set),e};function rr(e,r,t){er(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function tr(e){return"number"==typeof e}var ir=W();function nr(){return ir&&"symbol"==typeof Symbol.toStringTag}var ar=Object.prototype.toString;var or="function"==typeof Symbol?Symbol:void 0,cr="function"==typeof or?or.toStringTag:"";var lr=nr()?function(e){var r,t,i;if(null==e)return ar.call(e);t=e[cr],r=z(e,cr);try{e[cr]=void 0}catch(r){return ar.call(e)}return i=ar.call(e),r?e[cr]=t:delete e[cr],i}:function(e){return ar.call(e)},sr=Number,pr=sr.prototype.toString;var ur=nr();function fr(e){return"object"==typeof e&&(e instanceof sr||(ur?function(e){try{return pr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===lr(e)))}function gr(e){return tr(e)||fr(e)}function hr(e,r){if(!(this instanceof hr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!tr(e))throw new TypeError(ze("invalid argument. Real component must be a number. Value: `%s`.",e));if(!tr(r))throw new TypeError(ze("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return er(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),er(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}rr(gr,"isPrimitive",tr),rr(gr,"isObject",fr),rr(hr,"BYTES_PER_ELEMENT",8),rr(hr.prototype,"BYTES_PER_ELEMENT",8),rr(hr.prototype,"byteLength",16),rr(hr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),rr(hr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var dr={complex64:he,complex128:hr};function br(e){return dr[e]||null}export{br as default};
//# sourceMappingURL=mod.js.map
