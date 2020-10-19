"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.accessObjectByString=accessObjectByString;exports.getUniqueValuesByPath=getUniqueValuesByPath;exports.getFilteredColumn=getFilteredColumn;function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function accessObjectByString(path,obj){var separator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'.';// let val = o;
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
var properties=Array.isArray(path)?path:path.split(separator);return properties.reduce(function(prev,curr){return prev&&prev[curr];},obj);}function getUniqueValuesByPath(path,arr){var separator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'.';if(typeof arr==='undefined'){throw new Error('Cant call getUniqueValuesByPath with an undefined iterator');}if(_typeof(arr)!=='object'&&!Array.isArray(arr)){throw new Error("Method getUniqueValuesByPath arr argument must be an Array, but received '".concat(_typeof(arr),"'"));}return arr.reduce(function(acc,el){var elValue=accessObjectByString(path,el,separator);if(!acc.includes(elValue)){acc.push(elValue);}return acc;},[]);}function getFilteredColumn(path,data){var filters=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];var separator=arguments.length>3?arguments[3]:undefined;if(_typeof(filters)!=='object'||!Array.isArray(filters)){throw new Error("Method getFilteredColumn filters argument must be an Array, but received '".concat(_typeof(filters),"'"));}return data.filter(function(el){return filters.includes(String(accessObjectByString(path,el,separator)));});}