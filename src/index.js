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
                } else if (typeof options.columns[key] === 'object') {
                    const { path, type, lock } = options.columns[key];
                    base.path = path;
                    base.type = type;
                    base.lock = lock;
                }
                return base;
            });

        setColumns(newColumns);
    }, [JSON.stringify({ data, options })]);
    function renderColumn({
        name,
        path,
        type,
        label,
        lock = false,
    }) {
        const header = label || name;

        return (
            <div className='tabular-column' data-locked={lock}>
                <div className='tabular-header'>{header}</div>
                {data.map(el => <div className='tabular-cell'>{accessObjectByString(path, el)}</div>)}
            </div>
        );
    }
    return (
        <div className='tabular-container'>
            {columns.map(renderColumn)}
        </div>
    );
}
