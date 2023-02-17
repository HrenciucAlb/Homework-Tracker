import React from "react";
import KeyboardArrowLeftSharpIcon from "@mui/icons-material/KeyboardArrowLeftSharp";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import { Stack } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import format from "date-fns/format";

const ChangeWeek = ({
  firstDay,
  lastDay,
  handleLeftArrow,
  handleRightArrow,
}) => {
  return (
    <Stack
      direction="row"
      style={{
        fontSize: "20px",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "10px",
      }}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="previous"
        onClick={() => handleLeftArrow()}
      >
        <KeyboardArrowLeftSharpIcon />
      </IconButton>
      <Typography variant="h6" component="div">
        {format(firstDay, "MMMM dd, yyyy")}-{format(lastDay, "MMMM dd, yyyy")}
      </Typography>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="previous"
        onClick={() => handleRightArrow()}
      >
        <KeyboardArrowRightSharpIcon />
      </IconButton>
    </Stack>
  );
};

export default ChangeWeek;
