import { footer } from '../styles/Footer.css.ts';
import type { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={footer}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <p>&copy; {currentYear} My Shop. All rights reserved.</p>
        <p>Built with React & TypeScript</p>
      </div>
    </footer>
  );
};

export default Footer;
