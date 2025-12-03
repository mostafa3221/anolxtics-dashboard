import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { Avatar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { useTheme, styled } from "@mui/material/styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { useNavigate } from "react-router";
import useMediaQuery from "@mui/material/useMediaQuery";
import  Typography  from '@mui/material/Typography';
import PublicIcon from '@mui/icons-material/Public';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const Sidebar = ({ handleDrawerClose, open }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const List1 = [
    { name: "Dashboard", icon: <HomeOutlinedIcon />, patch: "/" },
    { name: "mange team", icon: <PeopleOutlineOutlinedIcon />, patch: "/team" },
    {
      name: "contacts information",
      icon: <ContactsOutlinedIcon />,
      patch: "/contacts",
    },
    {
      name: "invoices Balances",
      icon: <ListAltOutlinedIcon />,
      patch: "/invoices",
    },
  ];
  const List2 = [
    { name: "profile name", icon: <Person2OutlinedIcon />, patch: "/profile" },
    {
      name: "calender",
      icon: <CalendarMonthOutlinedIcon />,
      patch: "/calender",
    },
    { name: "FAQ page", icon: <LiveHelpOutlinedIcon />, patch: "/faq" },
  ];
  const List3 = [
    { name: "Bar Chart", icon: <BarChartOutlinedIcon />, patch: "/bar" },
    { name: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, patch: "/pie" },
    { name: "Line Chart", icon: <TimelineOutlinedIcon />, patch: "/line" },
    { name: "Choropleth Chart", icon: <PublicIcon />, patch: "/choropleth" },
  ];

  const navigate = useNavigate();
  const drawerContent = (
    <>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Avatar
        sx={{
          width: open ? 100 : 40,
          height: open ? 100 : 40,
          alignItems: "center",
          margin: "10px auto",
          transition: "all 0.3s ease-in-out",
        }}
        alt="User Avatar"
        src="https://tse3.mm.bing.net/th/id/OIP.4jMnIrMMsOP-zXwSBuRc6QHaF3?rs=1&pid=ImgDetMain&o=7&rm=3"
      />
      <Typography
        variant="h6"
        align="center"
        sx={{ alignItems: "center", marginBottom: 0, display: open ? "block" : "none" }}
      >
        John Doe
      </Typography>

      <Typography
        variant="h6"
        align="center"
        sx={{
          marginBottom: 0,
          display: open ? "block" : "none",
          color: (theme) => theme.palette.primary.main,
        }}
      >
        Adman
      </Typography>
      <Divider />
      <List>
        {List1.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(item.patch)}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {List2.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(item.patch)}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <Divider />
        {List3.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(item.patch)}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <>
      {isMdUp ? (
        <Drawer variant="permanent" open={open}>
          {drawerContent}
        </Drawer>
      ) : (
        <MuiDrawer variant="temporary" open={open} onClose={handleDrawerClose} ModalProps={{ keepMounted: true }}>
          {drawerContent}
        </MuiDrawer>
      )}
    </>
  );
};

export default Sidebar;
