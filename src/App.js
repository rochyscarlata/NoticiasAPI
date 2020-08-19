import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias'


function App() {

const [categoria, guardarCategoria] =useState ('');
const [noticias, guardarNoticias] = useState([]);


useEffect ( () => {
  const consultarAPI = async () =>{
    const url = `
    https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=94241d7935c24d928eef724de4ee5d5d`;
    
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    guardarNoticias(noticias.articles);
  }
  consultarAPI();
}, [categoria]);

  return (
   <Fragment>
     <Header
     titulo='Noticias'/>

     <div className="container white">
        <div className="card">
          <div className="card-heading">
      <Formulario
        guardarCategoria={guardarCategoria}
      
      />
      </div>
<div className="card-content">
<ListaNoticias 
          noticias={noticias}      
      />
</div>
     
     </div>
     </div>

   </Fragment>
  );
}

export default App;
