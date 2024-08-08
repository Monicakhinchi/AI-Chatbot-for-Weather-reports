import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './weather.module.css'; // Ensure the path is correct

interface WeatherResponse {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const WeatherReport = () => {
  const router = useRouter();
  const { query } = router.query;
  const [response, setResponse] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      const fetchWeather = async () => {
        try {
          const res = await axios.get(`/api/weather?query=${query}`);
          setResponse(res.data);
          setError(null);
        } catch (error) {
          console.error('Error fetching weather data:', error);
          setResponse(null);
          if (axios.isAxiosError(error) && error.response) {
            setError(`API Error: ${error.response.data.error}`);
          } else {
            setError('Error fetching weather data');
          }
        }
      };

      fetchWeather();
    }
  }, [query]);

  return (
    <div className={styles.weatherReport}>
      <button className={styles.backButton} onClick={() => router.push('/')}>Back</button>
      {error && <p className={styles.error}>{error}</p>}
      {response && (
        <div className={styles.weatherInfo}>
          <h2>{response.name}</h2>
          <p>Temperature: {response.main.temp}°C</p>
          <p>Weather: {response.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherReport;
