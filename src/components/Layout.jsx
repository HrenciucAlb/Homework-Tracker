import React, { useState, useEffect } from "react";
import NavBar from "./common/NavBar";
import Drawer from "./common/Drawer";
import Content from "./Content";
import useCourses from "../hooks/useCourses";

function Layout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [courses, isLoading] = useCourses();

  const [checked, setChecked] = useState({});

  useEffect(() => {
    if (!isLoading) {
      const newCourses = courses.reduce((acc, currentValue) => {
        return { ...acc, [currentValue.fields.name]: false };
      }, {});
      setChecked(newCourses);
    }
  }, [courses]);

  const handleChange = (course) => {
    setChecked({ ...checked, [course]: !checked[course] });
  };

  return (
    <>
      <NavBar handleDrawer={handleDrawer} />
      <Drawer
        isDrawerOpen={isDrawerOpen}
        handleDrawer={handleDrawer}
        handleChange={handleChange}
        checked={checked}
        courses={courses}
        isLoading={isLoading}
      />
      <Content checked={checked} />
    </>
  );
}

export default Layout;
