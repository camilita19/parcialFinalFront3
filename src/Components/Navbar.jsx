import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
 const {state, dispatch} = useContext(ContextGlobal);
   
return (

    <nav className={state.theme ? 'light' : 'dark'}>
     <div className="container-nav">
          <Link className= 'nav-dh' to="/home">
            <span>
              <strong>D</strong>
            </span>
            H Odonto
          </Link>
       </div>   
     <Link className= 'navBarLink' to='/'>Home</Link>
     <Link  className='navBarLink' to='contact'>Contact</Link>
     <Link  className='navBarLink' to='favs'>Favs</Link>
       
       <button   className = {`buttonTheme ${state.theme ? 'light' : 'dark'}`}
       onClick= {(()=> dispatch({type: 'CHANGE_THEME'}))}>
        {state.theme ? "☀️" : "🌙" } 
         </button> 
         
    </nav>
  )
}

export default Navbar

// style={{height: "30px", width: "30px"}}