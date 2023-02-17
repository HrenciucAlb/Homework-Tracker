import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import AssignmentCard from "./AssignmentCard";
import { currentWeekDays } from "../../utils/dates";
import { Card, CardContent, CardHeader } from "@mui/material";
import useHomeworks from "../../hooks/useHomeworks";
import format from "date-fns/format";
import usePrevious from "../../hooks/usePrevious";

const Week = ({ firstDay, lastDay, checked }) => {
  const [homeworks, isLoading] = useHomeworks(checked);
  console.log(homeworks);
  const prevChecked = usePrevious(checked);

  const listedWeekView = currentWeekDays(firstDay, lastDay).map(
    ({ name, date }) => (
      <Card key={name} raised sx={{ flexGrow: 1 }}>
        <CardHeader title={name} subheader={date} />
        <CardContent>
          {!isLoading &&
            homeworks.map((item) => {
              if (
                item.fields.deadline === format(new Date(date), "yyyy-MM-dd")
              ) {
                return (
                  <AssignmentCard
                    key={item.fields.title}
                    homework={{
                      title: item.fields.title,
                      subject: item.fields.course.fields.name,
                      description: item.fields.description,
                      isDone: item.fields.completed,
                    }}
                  />
                );
              }
              return <></>;
            })}
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
