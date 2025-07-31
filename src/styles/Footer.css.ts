import { style } from '@vanilla-extract/css';
import { themeVars } from './theme.css.ts';

export const footer = style({
  width: '100%',
  background: themeVars.color.background,
  color: themeVars.color.text,
  borderTop: `1px solid rgba(128, 128, 128, 0.2)`,
  padding: '2rem 1rem',
  textAlign: 'center',
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  
  selectors: {
    '& p': {
      margin: '0.5rem 0',
      fontSize: '0.9rem',
      opacity: 0.8,
      textAlign: 'center',
      width: '100%',
    },
    
    '& p:first-child': {
      fontWeight: 600,
      fontSize: '1rem',
      opacity: 1,
      textAlign: 'center',
    }
  }
});
