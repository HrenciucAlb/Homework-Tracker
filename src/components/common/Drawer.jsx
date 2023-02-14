import {
  Drawer as MuiDrawer,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

const Drawer = ({ isDrawerOpen, handleDrawer }) => {
  return (
    <>
      <MuiDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => handleDrawer()}
      >
        <Box p={2} width="250px" textAllign="center" role="presentation">
          <DrawerHeader>
            <IconButton onClick={() => handleDrawer()}>
              <ArrowBackIosNewSharpIcon />
            </IconButton>
          </DrawerHeader>
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </MuiDrawer>
    </>
  );
};

export default Drawer;
