import { Stack } from "@mui/system";
import React from "react";
import AssignmentCard from "./AssignmentCard";
import { currentWeekDays } from "../../utils/dates";
import { Typography, Card, CardContent, CardHeader } from "@mui/material";

const Week = () => {
  const listedWeekView = currentWeekDays.map(({ name, date }) => (
    <Card raised sx={{ flexGrow: 1 }}>
      <CardHeader title={name} subheader={date} />
      <CardContent>
        <AssignmentCard
          homework={{
            title: "Tema",
            subject: "info",
            description: "description",
            isDone: true,
          }}
        />
      </CardContent>
    </Card>
  ));

  return (
    <div style={{ margin: "20px" }}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        {listedWeekView}
      </Stack>
    </div>
  );
};

export default Week;
