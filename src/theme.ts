import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme';

const theme: ThemeOptions = {
  typography: {
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 36,
    },
    subtitle1: {
      fontSize: 16,
    },
    body1: {
      fontSize: 24,
    },
  },
};

export default createTheme(theme);
