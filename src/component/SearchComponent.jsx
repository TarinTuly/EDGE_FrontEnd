import React, { useEffect, useState } from "react";
import { CircularProgress, TextField } from "@mui/material";
import PostApiComponent from './PostApiComponent';

export default function SearchComponent() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setresults] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchValue) {
        setresults([]);
        return;
      }
      setisLoading(true);
      try {
        const response = await fetch(`http://10.19.80.67:8081/test_api/search.php?query=${searchValue}`);
        const data = await response.json();
        console.log(data);
        setresults(data.results || []);
      } catch (e) {
        console.log("error", e);
        setresults([]);
      } finally {
        setisLoading(false);
      }
    };
    fetchData();
  }, [searchValue]);

  return (
    <div>
      Search Here
      <br/>
      <TextField
        id="search"
        name="search"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        variant="outlined"
        label="search"
      />
      {isLoading ? (
        <CircularProgress/>
      ) : results.length > 0 ? (
        <div>
          {results.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ) : searchValue ? (
        <p>No results found</p>
      ) : null}
      <PostApiComponent/>
    </div>
  );
}
