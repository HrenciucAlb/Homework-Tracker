import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MuiDrawer } from "./Drawer";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MuiDrawer />
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Title1
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Title2
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Title3
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Title4
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
