import React from 'react';
import { actors } from '../data';

const Actors = () => {


  const actorCards = actors.map((actor, index) => {
      return(
        <div key={index} className="actor">
          <h3>{actor.name}</h3>
            <ul>
            {actor.movies.map((movie, index) => {
              return (
                <li key={index}>{movie}</li>
              )
            })}
            </ul> 
         
        </div>
        )
      })
  
  


  return (
      <div>
        <h1>Actors Page</h1>
          {actorCards}
      </div>
  );

};

export default Actors;
