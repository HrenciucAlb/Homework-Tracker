import React, { useState } from "react";
import NavBar from "./common/NavBar";
import Drawer from "./common/Drawer";

function Layout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <NavBar handleDrawer={handleDrawer} />
      <Drawer isDrawerOpen={isDrawerOpen} handleDrawer={handleDrawer} />
    </>
  );
}

export default Layout;
