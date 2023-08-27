import './NavBar.css';
import logo192M1 from '../../assets/logo512M1.png'


const NavBar = () => {
    return (
        <nav>

            <ul className='navsuperior'>
                <li className='navegacion'>
                    <a href='/'><img src={logo192M1} alt="logochico" className='logonavbar'/></a>
                </li>
                <li>
                    <a href='/' className='navegacion'>Inicio</a>
                </li>
                <li>
                    <a href='/acerca' className='navegacion'>Acerca</a>
                </li>
                <li>
                    <a href='/tienda' className='navegacion'>Tienda</a>
                </li>
                <li>
                    <a href='/contacto' className='navegacion'>Contacto</a>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="dropdown">
                        <button><b>MENU</b></button>
                        <div className='dropdown-content'>
                            <a href='/' className='navegacion'>Inicio</a>
                            <a href='/acerca' className='navegacion'>Acerca</a>
                            <a href='/tienda' className='navegacion'>Tienda</a>
                            <a href='/contacto' className='navegacion'>Contacto</a>
                        </div>
                    </div>
                </li>
            </ul>    
        </nav>
    );
};

export default NavBar;

