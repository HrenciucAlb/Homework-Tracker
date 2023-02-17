const Client = require("contentful").createClient({
  space: "ior0vbzk70ms",
  accessToken: "DzyusDSDTPsO8Q11c8gm9LWOoEP1__2ZDAiXEZsX-as",
});

const getCourses = () =>
  Client.getEntries({ content_type: "course" }).then(
    (response) => response.items
  );

const getHomework = () =>
  Client.getEntries({
    content_type: "class",
    "fields.deadline[lte]": "2023-02-17",
    "fields.deadline[gte]": "2023-02-13",
    order: "fields.deadline",
  }).then((response) => response.items);

const getFilteredHomework = (course, deadlineStart, deadlineEnd) => {
  let filtered = {};
  if (course !== null) {
    filtered["fields.course.fields.name[all]"] = course;
    filtered["fields.course.sys.contentType.sys.id"] = "course";
  }
  if (deadlineStart !== null && deadlineEnd !== null) {
    filtered = {
      ...filtered,
      "fields.deadline[lte]": deadlineEnd,
      "fields.deadline[gte]": deadlineStart,
    };
  }

  return Client.getEntries({
    content_type: "class",
    order: "fields.deadline",
    ...filtered,
  }).then((response) => response.items);
};

export { getCourses, getHomework, getFilteredHomework };
