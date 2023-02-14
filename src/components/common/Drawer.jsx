import { Drawer, Box, Typography, IconButton, Icon, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import { styled } from "@mui/material/styles";

import { useState } from "react";

const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

export const MuiDrawer = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setisDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAllign="center" role="presentation">
          <DrawerHeader>
            <IconButton onClick={() => setisDrawerOpen(false)}>
              <ArrowBackIosNewSharpIcon />
            </IconButton>
          </DrawerHeader>
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
};
