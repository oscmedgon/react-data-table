import { accessObjectByString } from './services/pathutils';

const { React } = window;

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
                    } = options.columns[key];
                    base.path = path;
                    base.type = type;
                    base.lock = lock;
                    base.hide = hide;
                    base.label = label;
                }
                return base;
            });

        setColumns(newColumns);
    }, [JSON.stringify({ data, options })]);

    return <ColumnsComponent options={options} columns={columns} data={data} />;
}

function ColumnsComponent({
    options: {
        icons: {
            lock: {
                on: lockIconOn = 'fas fa-lock',
                off: lockIconOff = 'fas fa-lock-open',
            } = {},
        } = {},
    } = {},
    data,
    columns,
}) {
    const [config, setConfig] = React.useState(columns);
    const [settingsStatus, setSettingsStatus] = React.useState(false);

    React.useEffect(() => {
        const currentConfig = config.map(el => ({ ...el }));
        const newConfig = columns;
        if (currentConfig.length === 0) {
            setConfig(newConfig);
        } else {
            const populated = currentConfig.reduce((acc, el) => {
                const prevColIndex = newConfig.findIndex(({ name }) => name === el.name);
                if (prevColIndex === -1) {
                    return acc;
                }
                const { name } = el;
                const { label, path, hide, lock } = newConfig[prevColIndex];
                const newEl = {
                    name,
                    hide: el.hide !== undefined ? el.hide : hide,
                    label: el.label !== undefined ? el.label : label,
                    lock: el.lock !== undefined ? el.lock : lock,
                    path,
                };
                acc.push(newEl);
            }, []);
            setConfig(populated);
        }
    }, [JSON.stringify({ columns })]);

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

    function renderColumn(
        {
            name,
            path,
            type,
            label,
            lock,
        },
        columnIndex,
    ) {
        const header = label || name;
        return (
            <div
                className='tabular-column'
                id={header}
                key={`${header}-COLUMN`}
                data-index={columnIndex}
            >
                <div className='tabular-header'>
                    <span className='header-label'>
                        {header}
                    </span>
                    <div className='header-actions'>
                        <i className={lock ? lockIconOn : lockIconOff} onClick={() => manageToggleLock(name)} />
                    </div>
                </div>
                {data.map((el, index) => (
                    <div
                        className='tabular-cell'
                        key={`${header}-ROW-${index}`}
                    >
                        {accessObjectByString(path, el)}
                    </div>
                ))}
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
                                <span>{label}</span>
                                <i className={lock ? lockIconOn : lockIconOff} onClick={() => manageToggleLock(name)} />
                            </div>
                        ))}
                    </div>
                ) : <i className='fa fa-cog open-settings' onClick={() => setSettingsStatus(true)} />}

            </div>
        </div>
    );
}
