import ReactTabularGrid from '../lib';
import { SAMPLE_RESTAURANT_DATA } from './sampleData';

const { React } = window;

export default function App() {
    return (
        <ReactTabularGrid
            data={SAMPLE_RESTAURANT_DATA}
            options={{
                columns: {
                    name: { path: 'name', lock: true },
                    neighborhood: 'neighborhood',
                    cuisine_type: { path: 'cuisine_type', lock: true },
                    monday: 'operating_hours.Monday',
                    rating1Week: { path: 'reviews.0.rating', label: 'Average ratings 1 week' },
                    rating1Month: { path: 'reviews.1.rating', label: 'Average ratings 1 month' },
                    rating1Year: { path: 'reviews.2.rating', label: 'Average ratings 1 year' },
                    anotherShit1Week: { path: 'reviews.0.rating', label: 'Average ratings 1 week' },
                    anotherShit1Month: { path: 'reviews.1.rating', label: 'Average ratings 1 month' },
                    anotherShit1Year: { path: 'reviews.2.rating', label: 'Average ratings 1 year' },
                },
            }}
        />
    );
}
