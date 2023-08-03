import Card from '../../components/Card/Card.js';
import React from 'react';
import Catalogo from '../../catalogo/catalogo.js';
import './Store.css'
import BarraBusquedaEstetica from '../../components/BarraBusqueda/BarraBusquedaEstetica.js';

//La barra de busqueda no es funcional aún.

const Store = () => {
    return(
        <div>
            <h2>Catálogo</h2>
            <div>
                <BarraBusquedaEstetica />                
            </div>
            <div className='catalogo'>
                {Catalogo.map(function (elem){
                    return(
                       <Card 
                         image={elem.image}
                         title={elem.title}
                         description={elem.description}
                         precio={elem.precio}
                        />
                    );    
                })}      
            </div>
        </div>
    )
};

export default Store;