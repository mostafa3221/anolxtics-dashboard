import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from './components/AppBar1';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
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
