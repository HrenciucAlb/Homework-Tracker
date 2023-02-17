import {
  Drawer as MuiDrawer,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import { styled } from "@mui/material/styles";
import Checklist from "./Checklist";

const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

const Drawer = ({
  isDrawerOpen,
  handleDrawer,
  handleChange,
  checked,
  courses,
  isLoading,
}) => {
  return (
    <>
      <MuiDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => handleDrawer()}
      >
        <Box p={2} width="400px" role="presentation">
          <DrawerHeader>
            <IconButton onClick={() => handleDrawer()}>
              <ArrowBackIosNewSharpIcon />
            </IconButton>
          </DrawerHeader>
          <Typography variant="h4">Filter</Typography>
          <Checklist
            handleChange={handleChange}
            checked={checked}
            courses={courses}
            isLoading={isLoading}
          />
        </Box>
      </MuiDrawer>
    </>
  );
};

export default Drawer;
