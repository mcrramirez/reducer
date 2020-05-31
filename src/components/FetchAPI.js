import React, { useEffect, useState } from "react";

export default function FetchAPI() {
  const [casts, setCasts] = useState("");
  useEffect(() => {
    console.log("fetching effect...");
    async function fetchdata() {
      const data = await fetch("https://the-office.p.rapidapi.com/1", {
        method: "GET",
        withCredentials: true,
        headers: {
          "X-Auth-Token": "583dc0fa49mshc04267a1c71b27fp143360jsn269781be2779",
          "Content-Type": "application/json",
          "x-rapidapi-host": "the-office.p.rapidapi.com",
          "x-rapidapi-key":
            "583dc0fa49mshc04267a1c71b27fp143360jsn269781be2779",
          useQueryString: true,
        },
      })
        .then((resp) => resp.json())
        .catch((err) => console.log(err));
      console.log(data);
      setCasts(data);
    }
    fetchdata(); //loops without dependency
  }, []);
  return true || casts;
}
