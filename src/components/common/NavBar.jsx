import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const titles = ["Title1", "Title2", "Title3", "Title4"];

function NavBar({ handleDrawer }) {
  const listItems = titles.map((title) => (
    <Typography key={title} variant="h6" component="div" sx={{ mr: 2 }}>
      {title}
    </Typography>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => handleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ mr: 2 }}>
            HomeworkTracker
          </Typography>
          {listItems}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
