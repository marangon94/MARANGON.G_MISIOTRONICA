import './BarraBusqueda.css';
import React, { useState } from "react";

const BarraBusquedaEstetica = () => {

    const [busqueda] = useState('');

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