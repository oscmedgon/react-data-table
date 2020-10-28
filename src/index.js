import React from 'react';
import cloneDeep from 'lodash.clonedeep';

import { accessObjectByString, getFilteredColumn, getUniqueValuesByPath } from './services/pathutils';
import { parseStringDate } from './services/dateUtils';


/**
 *
 * @param {array} data
 * @param {object} options
 * @param {object} options.columns
 * @param {string|object} options.columns[]
 * @param {string} options.columns[].path
 * @param {string} options.columns[].label
 * @param {"string"|"date"} options.columns[].type
 * @param {boolean} options.columns[].lock
 * @param {boolean} options.columns[].hide
 * @param {boolean} options.columns[].renderContent
 * @param {boolean} options.applyHiddenFilter
 * @param {object} options.icons
 * @param {object} options.icons.lock
 * @param {string} options.icons.filter
 * @param {string} options.icons.lock.on
 * @param {string} options.icons.lock.off
 * @param {object} options.icons.hide
 * @param {string} options.icons.hide.on
 * @param {string} options.icons.hide.off
 * @return {JSX.Element}
 * @constructor
 */
export default function ReactTabularGrid({
    data,
    options,
}) {
    const [columns, setColumns] = React.useState([]);

    React.useEffect(() => {
        const newColumns = Object.keys(options.columns)
            .map((key) => {
                const base = { name: key };
                if (typeof options.columns[key] === 'string') {
                    base.path = options.columns[key];
                    base.type = 'string';
                    base.lock = false;
                    base.hide = false;
                    base.label = base.name;
                } else if (typeof options.columns[key] === 'object') {
                    const {
                        path,
                        type = 'string',
                        lock = false,
                        hide = false,
                        label = base.name,
                        renderContent,
                    } = options.columns[key];
                    base.path = path;
                    base.type = type;
                    base.lock = lock;
                    base.hide = hide;
                    base.label = label;
                    base.renderContent = renderContent;
                }
                return base;
            });

        setColumns(newColumns);
    }, [JSON.stringify({ data, options })]);

    return <ColumnsComponent options={options} columns={columns} data={data} />;
}

function ColumnsComponent({
    options: {
        applyHiddenFilters = true,
        dateFormat = 'DD/MM/YYYY hh:mm:ss',
        icons: {
            filter: filterIcon = 'fas fa-filter',
            lock: {
                on: lockIconOn = 'fas fa-lock',
                off: lockIconOff = 'fas fa-lock-open',
            } = {},
            hide: {
                on: hideIconOn = 'fas fa-eye-slash',
                off: hideIconOff = 'fas fa-eye',
            } = {},
        } = {},
    } = {},
    data,
    columns,
}) {
    const [config, setConfig] = React.useState(columns);
    const [settingsStatus, setSettingsStatus] = React.useState(false);
    const [uniqueValues, setUniqueValues] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState(data);
    const [filters, setFilters] = React.useState([]);
    const [showFilterMenu, setShowFilterMenu] = React.useState(null);

    React.useEffect(() => {
        const newFilteredData = config.reduce((acc, column) => {
            if (column.hide && !applyHiddenFilters) { return acc; }
            const columnFilters = filters.find(el => el.name === column.name);
            if (!columnFilters) { return acc; }
            return getFilteredColumn(column.path, acc, columnFilters.values);
        }, cloneDeep(data));
        setFilteredData(newFilteredData);
    }, [JSON.stringify({ data, filters })]);
    React.useEffect(() => {
        const currentConfig = config.map(el => ({ ...el }));
        const newConfig = columns;
        if (currentConfig.length === 0) {
            if (newConfig.length) {
                const newUnique = newConfig.map(({ path, name }) => ({
                    name,
                    path,
                    values: path ? getUniqueValuesByPath(path, data) : null,
                }));
                setUniqueValues(newUnique);
            }
            setConfig(newConfig);
        } else {
            const populated = currentConfig.reduce((acc, el) => {
                const prevColIndex = newConfig.findIndex(({ name }) => name === el.name);
                if (prevColIndex === -1) {
                    return acc;
                }
                const { name } = el;
                const {
                    label,
                    path,
                    hide,
                    lock,
                    ...rest
                } = newConfig[prevColIndex];
                const newEl = {
                    name,
                    hide: el.hide !== undefined ? el.hide : hide,
                    label: label !== undefined ? label : el.label,
                    lock: el.lock !== undefined ? el.lock : lock,
                    path,
                    ...rest,
                };
                acc.push(newEl);
                return acc;
            }, []);
            if (populated.length) {
                const newUnique = newConfig.map(({ path, name }) => ({
                    name,
                    path,
                    values: path ? getUniqueValuesByPath(path, data) : null,
                }));
                setUniqueValues(newUnique);
            }
            setConfig(populated);
        }
    }, [JSON.stringify({ columns })]);

    function onFilterChange(columnName, id, value) {
        const prevFilters = [...filters];
        const currentColumnFiltersIndex = prevFilters.findIndex(el => el.name === columnName);
        if (currentColumnFiltersIndex !== -1) {
            if (!value) {
                const itemToRemove = prevFilters[currentColumnFiltersIndex].values.findIndex(el => el === id);
                prevFilters[currentColumnFiltersIndex].values
                    .splice(itemToRemove, 1);
            } else {
                prevFilters[currentColumnFiltersIndex].values.push(id);
            }
        } else {
            prevFilters.push({ name: columnName, values: [id] });
        }
        const newFilters = prevFilters.filter(cat => cat.values.length >= 1);
        setFilters(newFilters);
    }

    function manageToggleFilter(columnName) {
        if (showFilterMenu && showFilterMenu === columnName) {
            setShowFilterMenu(null);
        } else {
            setShowFilterMenu(columnName);
        }
    }
    function manageToggleLock(columnName) {
        const newConfig = config.map((el) => {
            if (el.name === columnName) {
                return {
                    ...el,
                    lock: !el.lock,
                };
            }
            return el;
        });
        setConfig(newConfig);
    }

    function manageToggleHide(columnName) {
        const newConfig = config.map((el) => {
            if (el.name === columnName) {
                return {
                    ...el,
                    hide: !el.hide,
                };
            }
            return el;
        });
        setConfig(newConfig);
    }

    function renderColumn(
        {
            name,
            path,
            type,
            label,
            lock,
            hide,
            renderContent,
        },
        columnIndex,
    ) {
        if (hide || (!path && !renderContent)) {
            return null;
        }
        const header = label || name;
        const columnUniqueValues = path ? uniqueValues.find((col => col.name === name)) : null;
        const columnFilters = filters.find((col => col.name === name));
        return (
            <div
                className='tabular-column'
                id={header}
                key={`${header}-COLUMN`}
                data-index={columnIndex}
            >
                <div className='tabular-header'>
                    <div className='tabular-header__wrapper'>
                        <div className='header-label'>
                            {header}
                        </div>
                        <div className='header-actions' data-filters={columnFilters?.values.length || 0}>
                            <i className={filterIcon} data-filters={columnFilters?.values.length || 0} onClick={() => manageToggleFilter(name)} />
                            <i className={lock ? lockIconOn : lockIconOff} onClick={() => manageToggleLock(name)} />
                            <i className={hide ? hideIconOn : hideIconOff} onClick={() => manageToggleHide(name)} />
                        </div>
                        {showFilterMenu !== null && showFilterMenu === name && (
                            <div className='header-label__filters-container'>
                                {columnUniqueValues?.values.map(el => (
                                    <div className='filter-item'>
                                        {type === 'string' && <label htmlFor={el}>{el}</label>}
                                        {type === 'date' && <label htmlFor={el}>{parseStringDate(el, dateFormat)}                                        </label>}
                                        <input
                                            type='checkbox'
                                            id={el}
                                            defaultChecked={columnFilters?.values.includes(String(el))}
                                            onChange={({ target }) => onFilterChange(name, target.id, target.checked)}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {filteredData.map((el, index) => {
                    if (renderContent && typeof renderContent === 'function') {
                        return (
                            <div
                                className='tabular-cell'
                                key={`${header}-ROW-${index}`}
                            >
                                {
                                    renderContent({
                                        rowData: filteredData[index],
                                        fullData: filteredData,
                                        columnUniqueValues,
                                        columnFilters,
                                        config: {
                                            column: {
                                                name,
                                                path,
                                                type,
                                                label,
                                                lock,
                                                hide,
                                            },
                                            global: config,
                                        },
                                    })
                            }
                            </div>
                        );
                    }
                    if (!path) {
                        const error = new Error('Tryed to render a column without an specified path');
                        console.error(error.stack);
                        return null;
                    }
                    switch (type) {
                        case 'date': {
                            const formattedDate = parseStringDate(accessObjectByString(path, el), dateFormat);

                            return (
                                <div
                                    className='tabular-cell'
                                    key={`${header}-ROW-${index}`}
                                >
                                    {formattedDate}
                                </div>

                            );
                        }
                        default: {
                            return (
                                <div
                                    className='tabular-cell'
                                    key={`${header}-ROW-${index}`}
                                >
                                    {accessObjectByString(path, el)}
                                </div>
                            );
                        }
                    }
                })}

            </div>
        );
    }
    const lockedColumns = config.filter(column => column.lock);
    const unlockedColumns = config.filter(column => !column.lock);
    return (
        <div className='tabular-container'>
            {lockedColumns.length >= 1 && (
                <div className='locked-columns__container'>
                    {lockedColumns.map(renderColumn)}
                </div>
            )}
            {unlockedColumns.map(renderColumn)}
            <div className='options-container' data-toggled={settingsStatus}>
                {settingsStatus ? (
                    <div className='tabular-settings'>
                        <i className='fa fa-times close-settings' onClick={() => setSettingsStatus(false)} />
                        {config.map(({ name, label, lock, hide }) => (
                            <div className='tabular-settings__item'>
                                <span className='tabular-settings__item-label' title={label}>{label}</span>
                                <div className='tabular-settings__item-actions'>
                                    <i className={lock ? lockIconOn : lockIconOff} onClick={() => manageToggleLock(name)} />
                                    <i className={hide ? hideIconOn : hideIconOff} onClick={() => manageToggleHide(name)} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : <i className='fa fa-cog open-settings' onClick={() => setSettingsStatus(true)} />}

            </div>
        </div>
    );
}
