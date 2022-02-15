import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie, index) => {
    const genres = movie.genres.map((genre, i) => <li key={i}>{genre}</li>)
    return (
      <div key={index}>
        <p>Movie: {movie.title}</p>
        <p>Run Time: {movie.time}</p>
        <ul>
          {genres}
        </ul>
      </div>)
  })

  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {movieList}
      </div>
    </div>);
}

export default Movies;
