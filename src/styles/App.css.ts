import { style } from '@vanilla-extract/css';
import { themeVars } from './theme.css.ts';

export const rootContainer = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: themeVars.color.background,
  color: themeVars.color.text,
  transition: 'background-color 0.3s ease, color 0.3s ease',
});

export const appClass = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  fontFamily: 'system-ui, sans-serif',
});
