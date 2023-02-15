import { Stack } from "@mui/system";
import { IconButton } from "@mui/material";
import React from "react";
import Week from "./common/Week";
import KeyboardArrowLeftSharpIcon from "@mui/icons-material/KeyboardArrowLeftSharp";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";

const Content = () => {
  return (
    <Stack spacing={2}>
      <h1>HomeworkTracker</h1>
      <Week />
    </Stack>
  );
};

export default Content;
