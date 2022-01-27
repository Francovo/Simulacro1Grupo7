import axios from "axios";
import React, { useState } from "react";
import { fileUpload } from "../routers/fileUpload";
import { url } from "../routers/Url";

export const Form = () => {
  const [Comida, setComida] = useState({
    Tipo: '',
    Precio: '',
    Image: ''
  })

  const { Tipo, Precio, Image } = Comida;

  const postData = () => {
    axios.post(url,Comida)
   .then(response => console.log(response.data))
   .catch(error => console.log(error))
    
}
  
  const handleChanged = ({target}) => {
    setComida({
      ...Comida,
      [target.name]: target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
     fileUpload(file)
    .then(response => {
        Comida.Image = response;
    }).catch(error => {
        console.log(error.message)
    }) 
  }

  return (
    <div>
      <form id="formulario" onSubmit={handleSubmit}>
        <h2>Registro de Estudiantes</h2>
        <hr />
        <div>
          <label>Tipo de alimento</label>
          <input
            id="inputTipo"
            name="Tipo"
            value={Tipo}
            onChange={handleChanged}
          />
        </div>
        <div>
          <label>Precio</label>
          <input
            id="inputPrecio"
            name="Precio"
            value={Precio}
            onChange={handleChanged}
          />
        </div>
        <div>
          <label>Imagen</label>
          <input
            id="botonImagen"
            type="file"
            name="Image"
            value={Image}
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button onClick={() => postData()} id="btnRegistro">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
