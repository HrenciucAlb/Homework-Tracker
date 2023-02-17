import { Stack } from "@mui/system";
import React from "react";
import AssignmentCard from "./AssignmentCard";
import { currentWeekDays } from "../../utils/dates";
import { Card, CardContent, CardHeader } from "@mui/material";

const Week = ({ firstDay, lastDay }) => {
  const listedWeekView = currentWeekDays(firstDay, lastDay).map(
    ({ name, date }) => (
      <Card key={name} raised sx={{ flexGrow: 1 }}>
        <CardHeader title={name} subheader={date} />
        <CardContent>
          <AssignmentCard
            homework={{
              title: "Tema",
              subject: "Subject",
              description: "description",
              isDone: true,
            }}
          />
        </CardContent>
      </Card>
    )
  );

  return (
    <Stack direction="row" justifyContent="space-between" spacing={2}>
      {listedWeekView}
    </Stack>
  );
};

export default Week;
