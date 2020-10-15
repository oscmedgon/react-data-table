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
                    const { path, type } = options.columns[key];
                    base.path = path;
                    base.type = type;
                }
                return base;
            });

        setColumns(newColumns);
    }, [JSON.stringify({ data, options })]);
    function renderColumn({ name, path, type, label }) {
        return (
            <div className='tabular-column' style={{ display: 'flex', flexDirection: 'column', padding: '5px 20px' }}>
                <div className='tabular-header'>{label || name}</div>
                {data.map(el => <div>{accessObjectByString(path, el)}</div>)}
            </div>
        );
    }
    return (
        <div className='tabular-container' style={{ display: 'flex' }}>
            {columns.map(renderColumn)}
        </div>
    );
}
