![badge](https://badgen.net/npm/v/react-tabular-grid)
![badge](https://badgen.net/npm/license/react-tabular-grid)
![badge](https://badgen.net/bundlephobia/min/react-tabular-grid)
![badge](https://badgen.net/bundlephobia/dependency-count/react-tabular-grid)
![badge](https://badgen.net/bundlephobia/tree-shaking/react-tabular-grid)

## Welcome to the react-tabular-grid package documentation

### About the package
The package is a headless package, this means you get a component without any spectacular styles, but also you get a smaller package, any way you probably you are going to apply your specific styles

At Proppos we needed a package to display datasets with some specific features, after some research, we decided to create the package we needed and share it with the world because the existing ones won't with our needs.

### Package requirements
The package makes use of `useState` and `useEffect` React hooks, and it's required a React 16.8.0 or superior, is recommended to use the latest 16x version available.

### Installing the package

``` shell script
npm i --save react-tabular-grid
```

### Basic usage
The first thing you want to do is import the basic stiles that come with the package, the file weights under `3kb` and only adds the required styles that makes the component work as intended.

If you plan to use the component on a single page you can add the import to that specific page, but if you a re planning to use it along the application is probably better importing it in the entry point of the application, so you don't need to worry about it anymore.
```js
import 'react-tabular-grid/lib/main.css';
```

Now is time for the real magic to happen.

```js
import { SAMPLE_RESTAURANT_DATA } from './sampleData';
import ReactTabularGrid from 'react-tabular-grid';

export default function App() {
    function renderCustomCell(data) {
        return <button onClick={() => { console.log(data); alert(JSON.stringify(data)); }}>Click me</button>;
    }

    return (
        <ReactTabularGrid
            data={SAMPLE_RESTAURANT_DATA}
            options={{
                columns: {
                    name: { path: 'name', lock: true },
                    neighborhood: 'neighborhood',
                    cuisine_type: { path: 'cuisine_type', lock: false },
                    monday: 'operating_hours.Monday',
                    rating1Week: { path: 'reviews.0.rating', label: 'Average ratings 1 week' },
                    rating1Month: { path: 'reviews.1.rating', label: 'Average ratings 1 month' },
                    rating1Year: { path: 'reviews.2.rating', label: 'Average ratings 1 year' },
                    custom: { label: 'Custom column', renderContent: renderCustomCell },
                },
            }}
        />
    );
}
```

#### Component props

|   Prop  |  Type  | Description |
| ------- | ------ | ----------- |
|  data   | Array  | The `data` prop is an array of objects where the component needs to iterate to show the data |
| options | Object | The `options` prop is an object containing all the required configuration of the package   |

#### Options

|   Option           |    Type    | DefaultValue          |     Description       |
| ------------------ | ---------- | --------------------- | --------------------- |
| columns            | Object     |  -                    | An object containing all the relative configuration of the dataset columns |
| applyHiddenFilters | Boolean    | `true`                | Determines the behaviour of the filters when a column is hidden, by default
| dateFormat         | String     | `DD/MM/YYYY hh:mm:ss` | Format applied to all the columns of type `'date'` |
| icons              | Object     | -                     | An object containing the icons configurations      |
