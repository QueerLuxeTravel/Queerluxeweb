import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import '../styles/globals.css';

const Home = () => {
  return (
    <div>
      <Header />
      <main className='fade-in'>
        <section className='hero'>
          <img src='/images/holiday-banner.jpg' alt='Holiday Banner' className='holiday-banner' />
          <h1>Welcome to QueerLuxe Travel</h1>
          <p>Discover luxurious and inclusive travel experiences tailored for the vibrant LGBTQ+ community.</p>
          <Link href='/blog' legacyBehavior>
            <a className='cta-button'>Explore Our Blog</a>
          </Link>
        </section>
        <section className='about'>
          <h2>About QueerLuxe Travel</h2>
          <p>At QueerLuxe Travel, we believe that every journey is an opportunity to celebrate, empower, and connect the vibrant LGBTQ+ community. Our brand is a chorus of voices, each with its own unique story and perspective, united by a shared passion for luxurious, safe, and unforgettable travel experiences.</p>
          <p>Inspired by the wit of Oscar Wilde, the courage of Marsha P. Johnson, the hope of Harvey Milk, the wisdom of Audre Lorde, the reflection of James Baldwin, and the fire of Sylvia Rivera, our brand voice is a vibrant blend of cleverness, boldness, optimism, insight, introspection, and unwavering support. We strive to represent and amplify the diverse voices within our community, ensuring that every interaction with our brand is memorable, empowering, and authentic.</p>
        </section>
        <section className='personas'>
          <h2>Meet Our Travel Personas</h2>
          <div className='persona-card'>
            <h3>Aspiring Explorer</h3>
            <p>Adventurous and curious, always looking for new experiences and destinations. Prefers a mix of luxury and adventure.</p>
            <Link href='/blog/aspiring-explorer' legacyBehavior>
              <a className='cta-button'>Learn More</a>
            </Link>
          </div>
          <div className='persona-card'>
            <h3>Romantic Couple</h3>
            <p>Seeking luxurious and romantic travel experiences. Prefers high-end accommodations and exclusive experiences.</p>
            <Link href='/blog/romantic-couple' legacyBehavior>
              <a className='cta-button'>Learn More</a>
            </Link>
          </div>
          <div className='persona-card'>
            <h3>Luxury Seeker</h3>
            <p>Prefers the finest accommodations, dining, and experiences. Values exclusivity and personalized service.</p>
            <Link href='/blog/luxury-seeker' legacyBehavior>
              <a className='cta-button'>Learn More</a>
            </Link>
          </div>
          <div className='persona-card'>
            <h3>Experienced Jetsetter</h3>
            <p>Frequent and experienced traveler seeking unique and luxurious experiences around the world.</p>
            <Link href='/blog/experienced-jetsetter' legacyBehavior>
              <a className='cta-button'>Learn More</a>
            </Link>
          </div>
          <div className='persona-card'>
            <h3>Culture Enthusiast</h3>
            <p>Prefers culturally immersive and luxurious travel experiences. Seeks destinations with rich history, art, and cultural experiences.</p>
            <Link href='/blog/culture-enthusiast' legacyBehavior>
              <a className='cta-button'>Learn More</a>
            </Link>
          </div>
        </section>
        <section className='contact'>
          <h2>Get in Touch</h2>
          <Link href='/contact' legacyBehavior>
            <a className='cta-button'>Contact Us</a>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
