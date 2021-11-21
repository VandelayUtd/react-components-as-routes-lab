import React from 'react';
import { actors } from '../data';

const Actors = () => {


  const actorCards = () => actors.map((actor, index) => <h3>{actor.name}</h3>)
  


  return (
      <div>
        <h1>Actors Page</h1>
          {actorCards}
      </div>
  );
};

export default Actors;
