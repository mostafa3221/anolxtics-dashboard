import { StrictMode, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';

function Root() {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <App mode={mode} toggleColorMode={toggleColorMode} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StrictMode>
      <Root />
    </StrictMode>
  </HashRouter>
)
