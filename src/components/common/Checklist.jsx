import { Typography, Checkbox } from "@mui/material";
import { Stack } from "@mui/system";

const Checklist = ({ handleChange, checked, courses, isLoading }) => {
  const listedCourses =
    !isLoading &&
    courses.map((item) => {
      return (
        <Stack key={item.fields.name} direction="row" alignItems="center">
          <Checkbox
            color="default"
            checked={checked[item.fields.name]}
            onClick={() => {
              handleChange(item.fields.name);
            }}
          />
          <Typography key="item" variant="h6" component="div">
            {item.fields.name}
          </Typography>
        </Stack>
      );
    });

  return listedCourses;
};

export default Checklist;
