import { useEffect, useState } from "react";
import { getHomework, getFilteredHomework } from "../contentful";

const promise = getHomework();

export default function useHomeworks(checked) {
  const [homeworks, setHomeworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    promise.then((response) => {
      setHomeworks(response);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    let course = null;
    for (const item in checked) {
      if (checked[item] === true) {
        course = item;
      }
    }

    getFilteredHomework(course, null, null).then((response) => {
      setHomeworks(response);
      setIsLoading(false);
    });
  }, [checked]);

  return [homeworks, isLoading];
}
