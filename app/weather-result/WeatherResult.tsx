// app/weather-result/page.tsx
"use client"; // Ensure this is a Client Component

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './WeatherResult.module.css';

interface WeatherResponse {
    name: string;
    main: {
        temp: number;
    };
    weather: {
        description: string;
    }[];
}

const WeatherResult = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || ''; // Use a default empty string if query is null

    const [response, setResponse] = useState<WeatherResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (query) {
            setLoading(true);
            axios.get(`/api/weather?query=${query}`)
                .then(res => {
                    setResponse(res.data);
                    setError(null);
                })
                .catch(err => {
                    setResponse(null);
                    if (axios.isAxiosError(err) && err.response) {
                        setError(`API Error: ${err.response.data.error}`);
                    } else {
                        setError('Error fetching weather data');
                    }
                })
                .finally(() => setLoading(false));
        }
    }, [query]);

    if (!query) {
        return <p>No city provided. Please enter a city name to get the weather data.</p>;
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.resultContainer}>
            <div className={styles.weatherBox}>
                {error && <p className={styles.error}>{error}</p>}
                {response && (
                    <div className={styles.weatherInfo}>
                        <h2>{response.name}</h2>
                        <p>Temperature: {response.main.temp}°C</p>
                        <p>Weather: {response.weather[0].description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherResult;
