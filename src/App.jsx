import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from './components/AppBar1';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography, Select, MenuItem } from '@mui/material';
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

  // If on a phone, show a blocker message and prevent rendering the app UI
  if (isMobile) {
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
          <Typography>{messages[lang].body}</Typography>
        </Box>
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
