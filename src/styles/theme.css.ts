import { createThemeContract, createTheme } from '@vanilla-extract/css';

export const themeVars = createThemeContract({
  color: {
    background: null,
    text: null,
    nav: null,
    navActive: null,
    card: null,
    cartBg: null,
    cartText: null,
  },
});

export const [lightThemeClass, lightThemeVars] = createTheme(themeVars, {
  color: {
    background: '#fff',
    text: '#222',
    nav: '#222',
    navActive: 'hotpink',
    card: '#f8fafc',
    cartBg: '#fff',
    cartText: '#222',
  },
});

export const [darkThemeClass, darkThemeVars] = createTheme(themeVars, {
  color: {
    background: '#18181b',
    text: '#fff',
    nav: '#fff',
    navActive: 'hotpink',
    card: '#23232a',
    cartBg: '#23232a',
    cartText: '#fff',
  },
});
