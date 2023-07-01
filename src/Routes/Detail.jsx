import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const  Params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/`+ Params.id
  
  const [dentist, setDentist] =useState({})


   useEffect(()=>{
    axios(url).then(res =>
        setDentist(res.data))
   },[]);

  return (
    
    <>
       {dentist && (
        <div >
        <section className="dentist-Information">
          <h1>
            <strong className='std'>Detail Dentist</strong> {dentist?.name}{" "}
          </h1>
          <div>
            <ul className='listaDD'>
              <li>
                <strong className='listaD'>Full Name:</strong> {dentist.name}
              </li>
              <li>
                <strong className='listaD'>Phone:</strong> {dentist.phone}
              </li>
              <li>
                <strong className='listaD'>Website:</strong> {dentist.website}
              </li>
              <li>
                <strong className='listaD'>Email:</strong> {dentist.email}
              </li>
            </ul>
          </div>
        </section>
        </div>
        )

     }
  </>
  )  
}
  

export default Detail