"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Chatbot.module.css';

const Chatbot: React.FC = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) {
      alert('City name cannot be empty');
      return;
    }

    // Redirect to the weather result page with the query as a URL parameter
    router.push(`/weather-result?query=${query}`);
  };

  return (
    <div className={styles.chatbot}>
      
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <input
            className={styles.formInput}
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Enter a city name"
          />
          <button className={styles.formButton} type="submit">Get Weather</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
