import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#8d4259',
      light: '#c87a94',
      dark: '#5d2334',
      contrastText: '#fffaf7',
    },
    secondary: {
      main: '#d6ab5a',
      light: '#edd39a',
      dark: '#a67c2d',
      contrastText: '#2f1b22',
    },
    background: {
      default: '#fffaf8',
      paper: 'rgba(255, 252, 249, 0.82)',
    },
    text: {
      primary: '#2f1b22',
      secondary: '#755a63',
    },
  },
  shape: {
    borderRadius: 22,
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Georgia", "Times New Roman", serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: '"Georgia", "Times New Roman", serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Georgia", "Times New Roman", serif',
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'radial-gradient(circle at top, rgba(244, 143, 177, 0.16), transparent 28%), linear-gradient(180deg, #fffaf7 0%, #fff5ef 45%, #fffdfb 100%)',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        '*': {
          boxSizing: 'border-box',
        },
      },
    },
  },
})

export default theme
