import { Stack } from "@mui/system";
import React from "react";
import { startOfWeek, endOfWeek, eachDayOfInterval, format } from "date-fns";
import AssignmentCard from "./common/AssignmentCard";

const weekDates = eachDayOfInterval({
  start: startOfWeek(new Date()),
  end: endOfWeek(new Date()),
});

weekDates.pop();

const listedDates = weekDates.map((date) => format(date, "MMMM dd, yyyy"));

const Content = () => {
  return (
    <Stack spacing={2}>
      <h1>HomeworkTracker</h1>
      <div style={{ margin: "20px" }}>
        {" "}
        <Stack direction="row" justifyContent="space-between">
          <div style={{ fontSize: "25px" }}>
            <p>Monday</p>
            <p>{listedDates[1]}</p>
            <AssignmentCard />
          </div>
          <div style={{ fontSize: "25px" }}>
            <p>Tuesday</p>
            <p>{listedDates[2]}</p>
            <AssignmentCard />
          </div>
          <div style={{ fontSize: "25px" }}>
            <p>Wednesday</p>
            <p>{listedDates[3]}</p>
            <AssignmentCard />
          </div>
          <div style={{ fontSize: "25px" }}>
            <p>Thursday</p>
            <p>{listedDates[4]}</p>
            <AssignmentCard />
          </div>
          <div style={{ fontSize: "25px" }}>
            <p>Friday</p>
            <p>{listedDates[5]}</p>
            <AssignmentCard />
          </div>
        </Stack>
      </div>
    </Stack>
  );
};

export default Content;
