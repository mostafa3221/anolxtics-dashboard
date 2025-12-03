import { DataGrid } from "@mui/x-data-grid";
import TeamData from "../components/Teamdeta";
import { Box, useTheme } from "@mui/material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { GridToolbar } from "@mui/x-data-grid/internals";
const columns = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "age", headerName: "Age", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1, justifyContent: "center",
            alignItems: "center" },
  {
    field: "access",
    headerName: "Access",
    flex: 1,
    renderCell: ({ row: { access } }) => {
      const them= useTheme();
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            height: "80%",
            p: 0,
            m: "auto",
            my: 1,
            bgcolor:
              access === "admin" ? them.palette.error.dark : access === "user" ? them.palette.primary.dark : them.palette.success.dark,
            borderRadius: "4px",
            color: "white",
            textAlign: "center",
             transition: "all 0.3s ease-in-out",
          }}
        >
          {access === "admin"
          ?<AdminPanelSettingsIcon />
          :access === "user"
          ?<LockOpenIcon />
          :<LockOutlineIcon />
          }
          {access}
        </Box>
      );
    },
  },
];


const Contacts = () => {
  return (
    <>
      <div style={{ height: "100%", width: "99%",transition: "all 0.3s ease-in-out", margin: "auto" }}>
        
        <DataGrid rows={TeamData} columns={columns}  slots={{ toolbar: GridToolbar }}
        showToolbar />
      </div>
    </>
  );
};

export default Contacts;
