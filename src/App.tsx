import { useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { ServiceDescription } from './types';
import { LoadingIndicator } from './components/LoadingIndicator';
import { ErrorDescription } from './components/ErrorDescription';
import { Services } from './components/Services';
import { ping } from './services';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#A456F0',
    },
    secondary: {
      main: '#d6a13c ',
    },
    background: {
      default: '#12071F',
      paper: '#12071F',
    },
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState<ServiceDescription[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    ping()
      .then(setServices)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ paddingTop: '5em' }}>
        {isLoading && <LoadingIndicator />}
        {error && <ErrorDescription error={error} />}
        {!isLoading && !error && <Services services={services} />}
      </Container>
    </ThemeProvider>
  )
}

export default App
