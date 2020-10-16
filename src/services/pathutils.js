export function accessObjectByString(path, obj, separator = '.') {
    // let val = o;
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
    const properties = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev, curr) => prev && prev[curr], obj);
}
