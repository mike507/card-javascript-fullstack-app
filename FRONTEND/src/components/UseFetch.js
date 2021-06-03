import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [ignore, setIgnore] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result);
        setIgnore(false);
      })
      .catch(() => {
        console.log("Error");
      });
  }, [url, ignore]);
  return [data, ignore];
}

export default useFetch;
