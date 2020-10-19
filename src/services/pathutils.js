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

export function getUniqueValuesByPath(path, arr, separator = '.') {
    if (typeof arr === 'undefined') {
        throw new Error('Cant call getUniqueValuesByPath with an undefined iterator');
    }
    if (typeof arr !== 'object' && !Array.isArray(arr)) {
        throw new Error(`Method getUniqueValuesByPath arr argument must be an Array, but received '${typeof arr}'`);
    }
    return arr.reduce((acc, el) => {
        const elValue = accessObjectByString(path, el, separator);
        if (!acc.includes(elValue)) {
            acc.push(elValue);
        }
        return acc;
    }, []);
}

export function getFilteredColumn(path, data, filters = [], separator) {
    if (typeof filters !== 'object' || !Array.isArray(filters)) {
        throw new Error(`Method getFilteredColumn filters argument must be an Array, but received '${typeof filters}'`);
    }
    return data.filter(el => filters.includes(String(accessObjectByString(path, el, separator))));
}
