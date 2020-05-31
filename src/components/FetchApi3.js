import React, { useState, useEffect } from "react";

function useGiphy(query) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=UtMwVYzDooceEo8vkOruK5ud3PwVb3hW&q=${query}&limit=10&offset=0&rating=G&lang=en`
      ).then((resp) => resp.json());
      //console.log(res);
      setData(
        res.data.map((item) => {
          return item.images.preview.mp4;
        })
      );
      setLoading(false);
    }
    fetchData();
  }, [query]);
  //console.log("return data", data);
  return [loading, data];
}
export const FetchApi3 = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  //const [loading, setLoading] = useState(true);
  const [loading, data] = useGiphy(query);
  if (!data) return <p>No data...</p>;
  //console.log("data:", data);
  return (
    <div>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <input
          value={search}
          placeholder='enter search...'
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button type='submit'>Search</button>
      </form>
      {loading && <div>Loading GIPHY!</div>}
      {!loading && (
        <div>
          {data.map((item) => (
            <video autoPlay loop key={item} src={item} />
          ))}
        </div>
      )}
    </div>
  );
};
