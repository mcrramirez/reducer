import React, { useEffect } from "react";

function FetchFile(query) {
  useEffect(() => {
    console.log("useeffect...");
    async function FetchIt() {
      try {
        query = "ufo";
        const dats = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=UtMwVYzDooceEo8vkOruK5ud3PwVb3hW&q=${query}&limit=10&offset=0&rating=G&lang=en`
        ).then((resp) => resp.json());
        console.log(dats);
      } catch (error) {}
    }
    FetchIt();
  }, []);
}

export const FetchApi4 = () => {
  const stuff = FetchFile();
  return <div>Hello!</div>;
};
