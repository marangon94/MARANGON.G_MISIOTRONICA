//Aún no funciona el código de esta barra.

import './BarraBusqueda.css';
import React, { useState } from "react";
import Catalogo from '../../catalogo/catalogo.js';

const BarraBusqueda = () => {

    const [searchTerm,setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState ([]);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredProducts = Catalogo.filter((productos) => 
        productos.title.toLowerCase().startsWith(searchTerm));
        setFilteredProducts(filteredProducts);
        setSearchTerm(searchTerm);
    };

    return (
        <div className="barraBusqueda">
            <h1></h1>

            <input type="text"
                   placeholder="Buscar Producto"
                   value={searchTerm}
                   onChange={handleSearch}
            />
            {searchTerm !== '' && (
                <ul className='results-list'>
                    {filteredProducts.lenght > 0 ? (
                        filteredProducts.map((productos, index) => <li key={index}>{productos.title}</li>)
                    ) : (
                        <p className='no-results'>No se encontraron resultados</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default BarraBusqueda;