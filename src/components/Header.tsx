import { header, nav, navLink, activeNavLink, cart } from '../styles/Header.css.ts';
import type { FC } from 'react';
import { FaHome, FaBoxOpen, FaInfoCircle, FaEnvelope, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';

const Header: FC = () => {
  return (
    <header className={header}>
      <h1>My Shop</h1>
      <nav className={nav}>
        <a href="#" className={`${navLink} ${activeNavLink}`}><FaHome style={{ verticalAlign: 'middle' }} /> Home</a>
        <a href="#" className={navLink}><FaBoxOpen style={{ verticalAlign: 'middle' }} /> Products</a>
        <a href="#" className={navLink}><FaInfoCircle style={{ verticalAlign: 'middle' }} /> About</a>
        <a href="#" className={navLink}><FaEnvelope style={{ verticalAlign: 'middle' }} /> Contact</a>
        <div className={cart}>
          <FaHeart style={{ verticalAlign: 'middle', color: 'hotpink' }} />
          <span>Wishlist</span>
        </div>
        <div className={cart}>
          <FaUser style={{ verticalAlign: 'middle', color: '#90cdf4' }} />
          <span>My Account</span>
        </div>
        <div className={cart}>
          <FaShoppingCart style={{ verticalAlign: 'middle' }} />
          <span>Cart (0)</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
