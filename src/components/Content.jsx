import { Stack } from "@mui/system";
import React, { useState } from "react";
import Week from "./common/Week";
import ChangeWeek from "./common/ChangeWeek";
import { currentWeek } from "../utils/dates";
import { addWeeks, subWeeks } from "date-fns";

const Content = ({ checked }) => {
  const [firstDay, setFirstDay] = useState(currentWeek[0]);
  const [lastDay, setLastDay] = useState(currentWeek[4]);

  const setWeek = (monday, friday) => {
    setFirstDay(monday);
    setLastDay(friday);
  };

  const handleLeftArrow = () => {
    const firstNewDay = subWeeks(firstDay, 1);
    const lastNewDay = subWeeks(lastDay, 1);
    setWeek(firstNewDay, lastNewDay);
  };

  const handleRightArrow = () => {
    const firstNewDay = addWeeks(firstDay, 1);
    const lastNewDay = addWeeks(lastDay, 1);
    setWeek(firstNewDay, lastNewDay);
  };

  return (
    <Stack spacing={2}>
      <ChangeWeek
        handleLeftArrow={handleLeftArrow}
        handleRightArrow={handleRightArrow}
        firstDay={firstDay}
        lastDay={lastDay}
      />
      <Week checked={checked} firstDay={firstDay} lastDay={lastDay} />
    </Stack>
  );
};

export default Content;
