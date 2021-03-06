import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme={true} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
