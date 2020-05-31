import React, { useEffect, useState } from "react";

export const FetchApi2 = () => {
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    async function getData() {
      console.log("fetch2...");
      const data = await fetch(
        "https://covid19.mathdro.id/api/countries"
      ).then((resp) => resp.json());
      setCasts(data);
      console.log(data);
    }
    getData();
  }, []);
  return <div>fetchApi2: {casts[0]}</div>;
};
