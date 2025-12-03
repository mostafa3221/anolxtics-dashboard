import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from './components/AppBar1';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Select, MenuItem, Button } from '@mui/material';
import Team from './page/Team';
import Contacts from './page/Contacts';
import Invoices from './page/Invoices';
import Profile from './page/Profile';
import Calender from './page/Calender';
import Faq from './page/Faq';
import Bar from './page/Bar';
import Pie from './page/Pie';
import Line from './page/Line';
import Choropleth from './page/Choropleth';
import Dashboard from './page/dashboard/Dashboard';





const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



export default function App({toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
        setOpen(true);
      };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [lang, setLang] = React.useState('ar');
  const [allowMobileView, setAllowMobileView] = React.useState(false);
  const [showRotateHint, setShowRotateHint] = React.useState(false);

  const messages = {
    ar: {
      title: 'عذراً — لا يمكن فتح الموقع على الهواتف',
      body:
        'هذا الموقع يدعم العرض الكامل فقط على أجهزة الكمبيوتر أو التابلت. الرجاء فتحه على جهاز أكبر لعرض جميع الميزات.',
      label: 'اللغة',
    },
    en: {
      title: 'Sorry — site not available on phones',
      body:
        'This site is designed for full desktop or tablet display. Please open it on a larger device to access all features.',
      label: 'Language',
    },
  };
 
  const handleRotateAndOpen = async () => {
    try {
      if (typeof window !== 'undefined' && screen && screen.orientation && screen.orientation.lock) {
        await screen.orientation.lock('landscape');
        setAllowMobileView(true);
        return;
      }
      // try older vendor APIs
      // @ts-ignore
      const lockFn = (screen && (screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation));
      if (lockFn) {
        const ok = lockFn.call(screen, 'landscape');
        if (ok) {
          setAllowMobileView(true);
          return;
        }
      }
    } catch (e) {
      // ignore and show fallback
    }
    setShowRotateHint(true);
  };

  // If on a phone, show a blocker message unless the user explicitly allows mobile view
  if (isMobile && !allowMobileView) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          bgcolor: 'background.default',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
          <Select
            size="small"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label={messages[lang].label}
          >
            <MenuItem value="ar">العربية</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </Box>

          <Box sx={{ maxWidth: 520, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            {messages[lang].title}
          </Typography>
          <Typography sx={{ mb: 2 }}>{messages[lang].body}</Typography>

          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 2 }}>
            <Button
              variant="contained"
              onClick={handleRotateAndOpen}
              aria-label="rotate-to-landscape"
            >
              {lang === 'ar' ? 'جعل الهاتف بالعرض' : 'Rotate to landscape'}
            </Button>
          </Box>
        </Box>

        {showRotateHint && (
          <Box
            sx={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(0,0,0,0.6)',
              zIndex: 2000,
              p: 2,
            }}
            role="dialog"
            aria-modal="true"
          >
            <Box
              sx={{
                bgcolor: 'background.paper',
                p: 3,
                borderRadius: 2,
                textAlign: 'center',
                maxWidth: 360,
              }}
            >
              <Typography variant="h6" gutterBottom>
                {lang === 'ar' ? 'قم بتدوير جهازك' : 'Please rotate your device'}
              </Typography>
              <Typography>
                {lang === 'ar'
                  ? 'قم بتدوير هاتفك إلى الوضع الأفقي (Landscape) لعرض الموقع بشكل أفضل.'
                  : 'Rotate your phone to landscape mode to view the site better.'}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 2 }}>
                <Button onClick={() => setShowRotateHint(false)}>
                  {lang === 'ar' ? 'حسناً' : 'OK'}
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    );
  }
  return (
    <Box sx={{ display: 'flex' }}>
  <CssBaseline />
  <AppBar open={open} handleDrawerOpen={handleDrawerOpen} toggleColorMode={toggleColorMode} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
<Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/calender" element={<Calender />} /> 
      <Route path="/faq" element={<Faq />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/line" element={<Line />} />
      <Route path="/choropleth" element={<Choropleth />} />
    </Routes>
      </Box>
    </Box>
  );
}
