

import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import { appClass, rootContainer } from './styles/App.css.ts';
import { lightThemeClass, darkThemeClass } from './styles/theme.css.ts';
import { useState, useEffect } from 'react';



function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  // Optional: update body class for global theming
  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  return (
    <div
      className={`${rootContainer} ${theme === 'dark' ? darkThemeClass : lightThemeClass}`}
      style={{
        backgroundColor: theme === 'dark' ? '#18181b' : '#fff',
        color: theme === 'dark' ? '#fff' : '#222',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className={appClass}>
        <div style={{ 
          padding: '2rem', 
          border: '2px solid currentColor', 
          borderRadius: '8px',
          background: 'rgba(128, 128, 128, 0.1)',
          textAlign: 'center',
        }}>
          <h2>Welcome to My Shop</h2>
          <p>This is a demo of the theme switcher. Click the sun/moon icon in the header to switch themes!</p>
          <p>Current theme: <strong style={{
            color: theme === 'dark' ? '#90cdf4' : '#646cff',
            fontSize: '1.2em'
          }}>{theme}</strong></p>
          <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
            border: `3px solid ${theme === 'dark' ? '#90cdf4' : '#646cff'}`,
            borderRadius: '50%',
            margin: '1rem auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem'
          }}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

