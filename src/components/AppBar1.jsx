import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, Stack, useMediaQuery } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useTheme } from "@emotion/react";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const AppBar1 = ({ open, handleDrawerOpen, toggleColorMode }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        sx={isMdUp && open ? { marginLeft: drawerWidth, width: `calc(100% - ${drawerWidth}px)` } : {}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>

          {/* Search */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={2}>
            {theme.palette.mode === "dark" ? (
              <IconButton onClick={toggleColorMode} aria-label="toggle light mode">
                <BedtimeIcon />
              </IconButton>
            ) : (
              <IconButton onClick={toggleColorMode} aria-label="toggle dark mode">
                <Brightness5OutlinedIcon />
              </IconButton>
            )}

            <IconButton>
              <NotificationsNoneOutlinedIcon />
            </IconButton>

            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>

            <IconButton>
              <Person2OutlinedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBar1;
