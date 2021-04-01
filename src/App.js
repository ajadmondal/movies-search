import React, {useState, useEffect} from "react";
import './App.css';
import Navbar from "./Navbar/Navbar";
import Movies from "./Movie/Movies";
function App() {
  const [query, setQuery] = useState("marvel");
  const [data, setData] = useState([]);
  const preLink = "https://api.themoviedb.org/3/search/movie?query=";
  const subLink = "&api_key=81e8483e2fbd045038cbd1b461a89dff";
  
  useEffect( ()=>{
    async function fetchData() {
      const response = await fetch(preLink+query+subLink);
      const d = await response.json();
      setData(d.results);
      console.log(data)
    }
    fetchData();
  },[query]);
  function handleQuery(q) {
    setQuery(q);
  }
  return (
    <div className="App">
      <Navbar query={handleQuery} />
      <div style={{height: "120px"}}></div>
      <div className="movie-container">
        {data.map((movie) =>(
          <Movies
          key = {movie.id}
          poster = {movie.poster_path}
          overview = {movie.overview}
          title = {movie.title}
          rating = {movie.vote_average}
          popularity = { movie.popularity}
          date = {movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
