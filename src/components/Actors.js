import React from "react";
import { actors } from "../data";

function Actors() {
  const actorList = actors.map((actor, index) => {
    const actorMovies = actor.movies.map((movie, i) => <li key={i}>{movie}</li>)
    return (
      <div key={index}>
        {actor.name}
        <ul>
          {actorMovies}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>);
}

export default Actors;
