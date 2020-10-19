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
                    cuisine_type: { path: 'cuisine_type', lock: false },
                    monday: 'operating_hours.Monday',
                    rating1Week: { path: 'reviews.0.rating', label: 'Average ratings 1 week' },
                    rating1Month: { path: 'reviews.1.rating', label: 'Average ratings 1 month' },
                    rating1Year: { path: 'reviews.2.rating', label: 'Average ratings 1 year' },
                    anotherShit1Week: { path: 'reviews.0.rating', label: 'Another average ratings 1 week' },
                    anotherShit1Month: { path: 'reviews.1.rating', label: 'Another average ratings 1 month', lock: false },
                    anotherShit1Year: { path: 'reviews.2.rating', label: 'Another average ratings 1 year' },
                    randomRating1Week: { path: 'reviews.0.rating', label: 'Random average ratings 1 week' },
                    randomRating1Month: { path: 'reviews.1.rating', label: 'Random average ratings 1 month' },
                    randomRating1Year: { path: 'reviews.2.rating', label: 'Random average ratings 1 year' },
                    yetAnotherRating1Week: { path: 'reviews.0.rating', label: 'Yet another average ratings 1 week' },
                    yetAnotherRating1Month: { path: 'reviews.1.rating', label: 'Yet another average ratings 1 month' },
                    yetAnotherRating1Year: { path: 'reviews.2.rating', label: 'Yet another average ratings 1 year' },
                    lastAnotherRating1Week: { path: 'reviews.0.rating', label: 'Last average ratings 1 week' },
                    lastAnotherRating1Month: { path: 'reviews.1.rating', label: 'Last average ratings 1 month' },
                    lastAnotherRating1Year: { path: 'reviews.2.rating', label: 'Last average ratings 1 year' },
                },
            }}
        />
    );
}
