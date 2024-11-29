import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href='/' legacyBehavior>
          <a className={styles.navLink}>Home</a>
        </Link>
        <Link href='/blog' legacyBehavior>
          <a className={styles.navLink}>Blog</a>
        </Link>
        <Link href='/destinations' legacyBehavior>
          <a className={styles.navLink}>Destinations</a>
        </Link>
        <Link href='/about' legacyBehavior>
          <a className={styles.navLink}>About Us</a>
        </Link>
        <Link href='/contact' legacyBehavior>
          <a className={styles.navLink}>Contact</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
