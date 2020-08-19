import React from 'react';
import styles from './Formulario.css';
import useSelect from './hooks/useSelect';

const Formulario =({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'technology', label: 'Tecnologia'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
    ]
    const [categoria, SelectNoticia] = useSelect('general', OPCIONES);
    const buscarNoticias = e =>{
        e.preventDefault();
        guardarCategoria(categoria)
      }

    return(
      <div className="row">
        <div className="col s12 m8 offset-m2">
            <form onSubmit={buscarNoticias} >
            <div className="col s6">
                <h5 className={styles.heading}>Buscar por categoria</h5>
                </div>
                <div className="input-field col s6">

                <SelectNoticia/>
                    <input type="submit" className="btn red lighten-1" value="Buscar" />
                </div>
            </form>
        </div>
    </div>
    );
    

} 

export default Formulario;