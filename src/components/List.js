import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../routers/Url';

const List = () => {

  const [Registro, setRegistro] = useState([]);

  useEffect(() => {
    getData();
}, []);


  const getData = () => {
    axios.get(url)
    .then(response =>{
      setRegistro(response.data)
    })
    .catch(error => {
      console.log(error);
    })
  }

  const deleteData = (id) => {
    axios.delete(url+id)
    .then(response => {
        getData(response)
    })
    .catch(error => {
        console.log(error);
    })
}

  useEffect(() => {
    getData()
  }, []);

  return(
   <div>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Tipo de alimento</th>
                    <th>Precio</th>
                    <th>Imagen</th>

                    </tr>
                </thead>
                
                 <tbody>
                     {
                         Registro.map(objeto => (
                             <tr key={objeto.id}>
                                 <td>{objeto.Tipo}</td>
                                 <td>{objeto.Precio}</td>
                                 <td><img src={objeto.Image} width="100" height="100" alt=''/></td>
                                 <td><button onClick={() => deleteData(objeto.id)}>Eliminar</button></td>
                             </tr>
                         ))
                     }
                   
                 </tbody>
                 </table>
   </div>
  )
};

export default List;
