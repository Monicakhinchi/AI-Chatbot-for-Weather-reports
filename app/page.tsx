import Header from '../app/Header'; // Adjust the path as necessary
import MainContent from '../app/MainContent'; // Import the new component
import Chatbot from '../app/Chatbot';


export default function Home() {
  return (
    <div style={{ backgroundColor: '#2c2c2c', minHeight: '100vh' }}>
      <Header />
      <MainContent />
      <Chatbot />
    </div>
  );
}