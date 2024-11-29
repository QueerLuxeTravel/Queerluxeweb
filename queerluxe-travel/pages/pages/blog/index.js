import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import '../../styles/globals.css';

const Blog = () => {
  return (
    <div>
      <Header />
      <main className='fade-in'>
        <h1>QueerLuxe Travel Blog</h1>
        <p>Welcome to the QueerLuxe Travel Blog! Here you'll find articles tailored to different travel personas, offering insights, tips, and recommendations for luxurious and inclusive travel experiences.</p>
        <h2>Categories</h2>
        <ul>
          <li><Link href='/blog/aspiring-explorer-1' legacyBehavior><a className='cta-button'>Aspiring Explorer</a></Link></li>
          <li><Link href='/blog/romantic-couple-1' legacyBehavior><a className='cta-button'>Romantic Couple</a></Link></li>
          <li><Link href='/blog/luxury-seeker-1' legacyBehavior><a className='cta-button'>Luxury Seeker</a></Link></li>
          <li><Link href='/blog/experienced-jetsetter-1' legacyBehavior><a className='cta-button'>Experienced Jetsetter</a></Link></li>
          <li><Link href='/blog/culture-enthusiast-1' legacyBehavior><a className='cta-button'>Culture Enthusiast</a></Link></li>
        </ul>
        <h2>Recent Articles</h2>
        <ul>
          <li><Link href='/blog/aspiring-explorer-1' legacyBehavior><a className='cta-button'>Top 10 Luxury Adventure Destinations for LGBTQ+ Travelers</a></Link></li>
          <li><Link href='/blog/aspiring-explorer-2' legacyBehavior><a className='cta-button'>How to Plan a Luxury Vacation on a Budget</a></Link></li>
          <li><Link href='/blog/romantic-couple-1' legacyBehavior><a className='cta-button'>Planning the Perfect LGBTQ+ Luxury Honeymoon</a></Link></li>
          <li><Link href='/blog/romantic-couple-2' legacyBehavior><a className='cta-button'>Top LGBTQ+ Friendly Luxury Spas and Resorts</a></Link></li>
          <li><Link href='/blog/luxury-seeker-1' legacyBehavior><a className='cta-button'>Top 10 LGBTQ+ Friendly Luxury Cruises</a></Link></li>
          <li><Link href='/blog/luxury-seeker-2' legacyBehavior><a className='cta-button'>The Ultimate Luxury Travel Experiences for LGBTQ+ Travelers</a></Link></li>
          <li><Link href='/blog/experienced-jetsetter-1' legacyBehavior><a className='cta-button'>Luxury Travel Guide to Asia for LGBTQ+ Travelers</a></Link></li>
          <li><Link href='/blog/experienced-jetsetter-2' legacyBehavior><a className='cta-button'>The Importance of Inclusivity in Luxury Travel</a></Link></li>
          <li><Link href='/blog/culture-enthusiast-1' legacyBehavior><a className='cta-button'>Luxury Travel Guide to Europe for LGBTQ+ Travelers</a></Link></li>
          <li><Link href='/blog/culture-enthusiast-2' legacyBehavior><a className='cta-button'>Cultural and Historical Experiences in Europe for LGBTQ+ Travelers</a></Link></li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
