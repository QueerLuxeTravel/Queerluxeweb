import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/destinations'>Destinations</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/forum'>Forum</Link>
      </nav>
    </header>
  );
};

export default Header;
