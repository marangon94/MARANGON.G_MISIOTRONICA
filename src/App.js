import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Store from './pages/Store/Store.js';
import NotFound from './pages/NotFound/NotFound.js';

import Footer from './components/Footer/Footer';
import Encabezado from './components/Encabezado/Encabezado';
import NavBar from './components/NavBar/NavBar.js';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

const rutas = createBrowserRouter (
[
  {path:"/", element:<Home />},
  {path:"/acerca", element:<About />},
  {path:"/contacto", element:<Contact />},
  {path:"/tienda", element:<Store />},
  {path:"/*", element:<NotFound />},
]
); 

function App() {
  return (
    <div className="App">
      <div className='contenidoapp'>
        <Encabezado />
        <NavBar />
        <RouterProvider router={rutas} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
