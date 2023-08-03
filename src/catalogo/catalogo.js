import cable from '../assets/cable.jpg';
import capacitor from '../assets/capacitor.jpg';
import diodo from '../assets/diodo.jpg';
import llave from '../assets/llave.jpg';
import resistencia from '../assets/resistencia.jpg';
import transistor from '../assets/transistor.jpg';

const Catalogo = [
    {image: cable, title: 'Cable Tetrapolar', description: 'Rollo por 100 m', precio: '$1000'},
    {image: capacitor, title: 'Capacitor', description: 'Capacitor electrolítico 200 pF', precio: '$2000'},
    {image: diodo, title: 'Diodo', description: 'Diodo rectificado 1n4001 50V 1A', precio: '$3000'},
    {image: llave, title: 'Switch', description: 'Switch pulsador táctil 7.0 mm', precio: '$4000'},
    {image: resistencia, title: 'Resistencia', description: 'Resistencia cerámica 200 Ohm', precio: '$5000'},
    {image: transistor, title: 'Transistor', description: 'Algún tipo de transistor', precio: '$6000'},

];

export default Catalogo;
