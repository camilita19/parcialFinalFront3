import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser((prevUser) => {
        return {
            ...prevUser,
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value
        }
 })}

  const validacion =
    user.name.trim().length >= 5 &&
    user.email.length > 2 &&
    user.email.split("@");

  const handleSubmit = (e) => {
    e.preventDefault();
    validacion ? setShow(true) : setError(true);
  };

  return (
    <div className="conteiner-form">
      <form onSubmit={handleSubmit}>
        <input
          className="input-form"
          type="text"
          disabled={show}
          name="name"
          placeholder="Full Name"
          onChange={handleChange}/>

        <input
          className="input-form"
          type="email"
          disabled={show}
          name="email"
          placeholder="Email"
          onChange={handleChange}/>
        <div>
          <button className="boton" type="submit">
            Send
          </button>
         {error && <h5 className="err"> please verify that the information entered is correct</h5>} 
         {show && <h4 className="show-h4"> Thank you {user.name}, we will contact you as soon as possible via
          email </h4>}
      
        </div>  
      </form>
    </div>
  );
};

export default Form;
