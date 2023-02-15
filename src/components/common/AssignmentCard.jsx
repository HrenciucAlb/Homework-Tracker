import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const AssignmentCard = () => {
  return (
    <Card variant="outlined" elevation={3}>
      {" "}
      <CardHeader title="Assignments" subheader="Dezastru" />
      <CardContent>
        <p>Ai teme de facut baetas</p>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Button
        </Button>
      </CardActions>
    </Card>
  );
};

export default AssignmentCard;
