import React from 'react';
import { actors } from '../data';

const Actors = () => {


  const actorCards = () => {
    return(
      actors.map((actor, index) => {
        
        <div key={index} className="actor">
          <h3>actor.name</h3>
        </div>
      }))
      
  }
  


  return (
      <div>
        <h1>Actors Page</h1>
          {actorCards}
      </div>
  );
};

export default Actors;
