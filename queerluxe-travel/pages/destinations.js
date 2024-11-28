import Header from '../components/Header';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import styles from '../styles/globals.css';

const Destinations = () => {
  const destinations = [
    { name: 'Mediterranean Yacht Tour', description: 'Sip champagne on a private yacht.', imageUrl: '/images/yacht.jpg' },
    { name: 'Vibrant City Exploration', description: 'Explore the vibrant streets of a new city.', imageUrl: '/images/city.jpg' },
  ];

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Destinations</h1>
        {destinations.map((destination, index) => (
          <DestinationCard key={index} name={destination.name} description={destination.description} imageUrl={destination.imageUrl} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;
