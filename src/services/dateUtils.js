function parseDateNumber(date, requestedLength = 2) {
    const dateSplit = date.split('');
    if (dateSplit.length < requestedLength) {
        while (dateSplit.length < requestedLength) {
            dateSplit.unshift('0');
        }
    } else if (dateSplit.length > requestedLength) {
        dateSplit.splice(0, dateSplit.length - requestedLength);
    }
    return dateSplit.join('');
}

export function parseStringDate(date, dateFormat) {
    try {
        const rawDate = new Date(date);
        const vars = {
            fullYear: String(rawDate.getFullYear()),
            shotYear: parseDateNumber(String(rawDate.getFullYear())),
            shortMonth: String(rawDate.getMonth()),
            fullMonth: parseDateNumber(String(rawDate.getMonth())),
            shortDay: String(rawDate.getDay()),
            fullDay: parseDateNumber(String(rawDate.getDay())),
            shortHours: String(rawDate.getHours()),
            fullHours: parseDateNumber(String(rawDate.getHours())),
            shortMinutes: String(rawDate.getMinutes()),
            fullMinutes: parseDateNumber(String(rawDate.getMinutes())),
            shortSeconds: String(rawDate.getSeconds()),
            fullSeconds: parseDateNumber(String(rawDate.getSeconds())),
        };

        return dateFormat
            .split('YYYY')
            .join(vars.fullYear)
            .split('YY')
            .join(vars.shotYear)
            .split('MM')
            .join(vars.fullMonth)
            .split('M')
            .join(vars.shortMonth)
            .split('DD')
            .join(vars.fullDay)
            .split('D')
            .join(vars.shortDay)
            .split('hh')
            .join(vars.fullHours)
            .split('h')
            .join(vars.shortHours)
            .split('mm')
            .join(vars.fullMinutes)
            .split('m')
            .join(vars.shortMinutes)
            .split('ss')
            .join(vars.fullSeconds)
            .split('s')
            .join(vars.shortSeconds);
    } catch (error) {
        console.error(error.stack);
        return date;
    }
}
