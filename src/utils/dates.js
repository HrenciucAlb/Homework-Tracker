import { startOfWeek, endOfWeek, eachDayOfInterval, format } from "date-fns";

const week = (date1, date2) => {
  const weekDates = eachDayOfInterval({
    start: date1,
    end: date2,
  });

  return weekDates;
};

export default week;

const currentWeek = eachDayOfInterval({
  start: startOfWeek(new Date()),
  end: endOfWeek(new Date()),
});

currentWeek.pop();
currentWeek.shift();

const currentWeekDays = (date1, date2) => {
  const thisWeek = week(date1, date2);
  return thisWeek.map((date) => {
    return { date: format(date, "MMMM dd, yyyy"), name: format(date, "EEEE") };
  });
};
export { currentWeekDays, currentWeek };
