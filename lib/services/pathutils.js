"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.accessObjectByString=accessObjectByString;function accessObjectByString(path,obj){var separator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'.';// let val = o;
// s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
// s = s.replace(/^\./, ''); // strip a leading dot
// const a = s.split('.');
// for (let i = 0, n = a.length; i < n; ++i) {
//     const k = a[i];
//     if (k in o) {
//         val = o[k];
//     } else {
//         return;
//     }
// }
// return val;
var properties=Array.isArray(path)?path:path.split(separator);return properties.reduce(function(prev,curr){return prev&&prev[curr];},obj);}