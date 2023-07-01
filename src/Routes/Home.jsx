import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

// nico / Este importe es innecesario
// nico / import Detail from './Detail'
// nico / Lo que tenemos que hacer es que cuando se haga click a una <Card>
// nico / vayamos a la ruta /dentist/:id, eso lo definimos en el <Link>
// nico / El :id sera el id del dentista que se esta mostrando en la <Card>



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal)

   const url = 'https://jsonplaceholder.typicode.com/users'
  //  const [user, setUser]= useState([]);
  
  //   useEffect(()=>{
  //     axios(url).then(res=> {setUser(res.data); console.log(res.data)}) 
      
  //  },[])
   
  useEffect(()=>{
    axios(url).then(res => dispatch( res.data ))
    
  })
   
  return (
    <div
    className={`${
      state.theme ? 'light' : 'dark'
    }`}
  >  
     <h1 className='title-home'>Home</h1>
      <div className='card-grid'>
        {state.data.map(dentist => (  
        <Link to={`/dentist/` + dentist.id} key={dentist.id}>
        <Card {...dentist}  name={dentist.name} username={dentist.username}/>
        </Link>
        ))}  
       
      </div>
    </div>
  )
}

export default Home