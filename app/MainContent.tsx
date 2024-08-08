"use client"; // Only if you're using client-side rendering

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import styles from '../app/MainContent.module.css'; // Adjust the path if necessary

const MainContent = () => {
    const router = useRouter(); // Initialize the router

    // Function to handle button clicks and navigate to weather-result page
    const handleButtonClick = (query: string) => {
        router.push(`/weather-result?query=${encodeURIComponent(query)}`);
    };

    return (
        <main>
            <section className={styles.introSection}>
                <h1>Welcome to the Next.js Weather Report!</h1>
                <p>This is an open source weather reporting app template built with Next.js, the Vercel AI SDK, and Vercel KV.</p>
                <p>It uses React Server Components to combine text with dynamic weather data as output of the LLM. The UI state is synced through the SDK so the model is aware of real-time weather changes as they happen.</p>
            </section>
            <section className={styles.actionsSection}>
                <div className={styles.actionButtons}>
                    <button onClick={() => handleButtonClick('Mumbai')}>What is the current <br />weather of Mumbai?</button>
                    <button onClick={() => handleButtonClick('New York')}>What is the temperature<br /> of New York?</button>
                    <button onClick={() => handleButtonClick('South Korea')}>What is the weather<br /> forecast of South Korea?</button>
                    <button onClick={() => handleButtonClick('Kerala')}>What are the upcoming <br />weather events in Kerala?</button>
                </div>
            </section>
        </main>
    );
};

export default MainContent;
