import './NotFound.css';

const NotFound = () => {
    return(
        <div className="NotFound">
            <h1 className='error'>ERROR 404!</h1>
            <p>El recurso solicitado no se encuentra disponible</p>
        </div>
    )
};

export default NotFound;