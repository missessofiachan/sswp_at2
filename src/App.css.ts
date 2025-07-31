import { style } from '@vanilla-extract/css';

export const appClass = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f8fafc',
  color: '#222',
  fontFamily: 'system-ui, sans-serif',
});
