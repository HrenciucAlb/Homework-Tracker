import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";

const AssignmentCard = ({ homework, ...props }) => {
  return (
    <Card variant="outlined">
      <CardHeader title={homework.title} subheader={homework.subject} />
      <CardContent>{homework.description}</CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton color={homework.isDone ? "success" : "disabled"}>
          <CheckIcon />
        </IconButton>
        <IconButton color="primary">
          <VisibilityIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AssignmentCard;
