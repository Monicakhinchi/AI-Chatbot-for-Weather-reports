"use client"; // Only if you're using client-side rendering

import React from 'react';
import styles from '../app/Header.module.css'; // Adjust the path if necessary

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <a href="#" className={styles.logo}>Next.js AI Chatbot</a>
            <div className={styles.buttons}>
                <a href="https://github.com/" className={styles.githubButton}>GitHub</a>
                <a href="https://vercel.com/new/clone?utm_source=next-site&utm_medium=banner&b=main&s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fnextjs&showOptionalTeamCreation=false&template=nextjs&teamCreateStatus=hidden&utm_campaign=learn-pages-router_basics_deploying-nextjs-app_deploy" className={styles.deployButton}>Deploy to Vercel</a>
            </div>
        </header>
    );
};

export default Header;
