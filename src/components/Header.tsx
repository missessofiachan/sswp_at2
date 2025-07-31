import { header, nav, navLinks, rightSection, navLink, activeNavLink, cart, themeToggle } from '../styles/Header.css.ts';
import type { FC } from 'react';
import { FaHome, FaBoxOpen, FaInfoCircle, FaEnvelope, FaShoppingCart, FaHeart, FaUser, FaMoon, FaSun } from 'react-icons/fa';


type HeaderProps = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const Header: FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className={header}>
      <h1>My Shop</h1>
      <nav className={nav}>
        <div className={navLinks}>
          <a href="#" className={`${navLink} ${activeNavLink}`}>
            <FaHome /> Home
          </a>
          <a href="#" className={navLink}>
            <FaBoxOpen /> Products
          </a>
          <a href="#" className={navLink}>
            <FaInfoCircle /> About
          </a>
          <a href="#" className={navLink}>
            <FaEnvelope /> Contact
          </a>
        </div>
        <div className={rightSection}>
          <div className={cart}>
            <FaHeart style={{ color: 'hotpink' }} />
            <span>Wishlist</span>
          </div>
          <div className={cart}>
            <FaUser style={{ color: '#90cdf4' }} />
            <span>My Account</span>
          </div>
          <div className={cart}>
            <FaShoppingCart />
            <span>Cart (0)</span>
          </div>
          <button className={themeToggle} onClick={toggleTheme} title="Toggle dark/light mode">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
