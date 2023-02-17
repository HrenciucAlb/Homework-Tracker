import { useEffect, useState } from "react";
import { getCourses } from "../contentful";

const promise = getCourses();

export default function useCourses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    promise.then((response) => {
      setCourses(response);
      setIsLoading(false);
    });
  }, []);

  return [courses, isLoading];
}
