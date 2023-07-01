import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state, } = useContext(ContextGlobal)
   
  console.log(state.favs )
   
  return (
    <>
    <div className={`${
          state.theme ? 'light' : 'dark'
        }`}
      >
      <h1 className="favs-h1">Dentists Favs</h1>
      <div className="card-grid">
       {state.favs.map(dentist =>(<Card name={dentist.name}
        username={dentist.username} key={dentist.id} />))
       }
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        
      </div>
      </div>
    </>
  );
};

export default Favs;
