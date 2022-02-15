import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map((director, index) => {
    const directorsMovies = director.movies.map((movie, i) => <li key={i}>{movie}</li>)
    return (
      <div key={index}>{director.name}
        <ul>
          {directorsMovies}
        </ul>
      </div>)
    })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>);
}

export default Directors;
