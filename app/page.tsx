import React, { Suspense } from 'react';

// Dynamic imports with Suspense
const Header = React.lazy(() => import('../app/Header'));
const MainContent = React.lazy(() => import('../app/MainContent'));
const Chatbot = React.lazy(() => import('../app/Chatbot'));

export default function Home() {
  return (
    <div style={{ backgroundColor: '#2c2c2c', minHeight: '100vh' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <MainContent />
        <Chatbot />
      </Suspense>
    </div>
  );
}
