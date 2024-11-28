import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to QueerLuxe Travel</h1>
        <p>We believe that every journey is an opportunity to celebrate, empower, and connect the vibrant LGBTQ+ community.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
