import './Encabezado.css';
import LOGONEGATIVO from '../../assets/logo512M1NEGATIVO.png'

const Encabezado = () => {
    return (
        <div className='encabezado'>    
            <a href='/'><img src={LOGONEGATIVO} alt="logochico" className='imgencabezado'/></a>
        </div>
    );
};

export default Encabezado;