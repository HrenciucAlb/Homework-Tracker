import { startOfWeek, endOfWeek, eachDayOfInterval, format } from "date-fns";

const weekDates = eachDayOfInterval({
  start: startOfWeek(new Date()),
  end: endOfWeek(new Date()),
});

weekDates.pop();
weekDates.shift();

const currentWeekDays = weekDates.map((date) => {
  return { date: format(date, "MMMM dd, yyyy"), name: format(date, "EEEE") };
});

export { currentWeekDays };
