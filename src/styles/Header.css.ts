import { style } from '@vanilla-extract/css';
import { themeVars } from './theme.css.ts';

export const header = style({
  width: '100%',
  background: themeVars.color.background,
  color: themeVars.color.text,
  padding: '1rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
});

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  marginTop: '0.5rem',
  width: '100%',
  justifyContent: 'space-between',
});

export const navLinks = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
});

export const rightSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const navLink = style({
  color: themeVars.color.nav,
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '1.1rem',
  transition: 'color 0.2s',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  ':hover': {
    color: '#90cdf4',
  },
});

export const activeNavLink = style({
  color: themeVars.color.navActive,
});

export const cart = style({
  background: themeVars.color.cartBg,
  color: themeVars.color.cartText,
  borderRadius: '999px',
  padding: '0.3rem 1rem',
  fontWeight: 600,
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const themeToggle = style({
  background: 'none',
  border: 'none',
  color: themeVars.color.text,
  cursor: 'pointer',
  fontSize: '1.3rem',
  display: 'flex',
  alignItems: 'center',
  transition: 'color 0.2s',
  ':hover': {
    opacity: 0.7,
  },
});
