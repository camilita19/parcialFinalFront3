import React, { useContext } from "react";
import doctor from "../images/doctor.jpg"
import { ContextGlobal } from "./utils/global.context";
import { Link} from "react-router-dom";
import Detail from "../Routes/Detail";




const Card = ({ name, username, dentist}) => {
  const {state, dispatch} = useContext(ContextGlobal);

  const addFav = () =>{
    dispatch({type:'ADD_favs', payload:state.favs})
}

  return (
    <div className="container-card">
    <div className="card">
     <img
        className="card-img"
        src={doctor}
        alt="imagenDoctor"
      />
      <div>
        {/* {<Link to={`/dentist/` + dentist.id} key={dentist.id}>  */}
             <h6>{name}</h6>
             <p>{username}</p>
        {/* </Link>} */}
         <button className="bttnHeart" onClick={addFav}>
         ❤
         </button> 
       
      </div>
    </div>    
      
      
   </div>
  );
};

export default Card;


        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
         {/* {favoriteDentist ? (state.favs ? <img src={heart} alt="" /> : <img src={heartSke} alt="" />)} */}
 