import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  background: '#222',
  color: '#fff',
  padding: '1rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
});

export const nav = style({
  display: 'flex',
  gap: '2rem',
  marginTop: '0.5rem',
});

export const navLink = style({
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '1.1rem',
  transition: 'color 0.2s',
  ':hover': {
    color: '#90cdf4',
  },
});

export const activeNavLink = style({
  color: 'hotpink',
});

export const cart = style({
  marginLeft: 'auto',
  background: '#fff',
  color: '#222',
  borderRadius: '999px',
  padding: '0.3rem 1rem',
  fontWeight: 600,
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});
