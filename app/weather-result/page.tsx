import { Suspense } from 'react';
import WeatherResult from './WeatherResult';

const Page = () => {
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <WeatherResult />
            </Suspense>
        </div>
    );
};

export default Page;
