import './BarraBusqueda.css';
import React, { useState } from "react";
import Catalogo from '../../catalogo/catalogo.js';

const BarraBusquedaEstetica = () => {

    const [busqueda, setBusqueda] = useState('');

    return (
        <div className="barraBusqueda">
            <input type="text"
                   placeholder="Buscar Producto"
                   value={busqueda}
            />
        </div>
    );
};

export default BarraBusquedaEstetica;