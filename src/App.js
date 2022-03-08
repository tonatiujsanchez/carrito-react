import { useState } from "react"
import {Routes, Route, NavLink } from "react-router-dom";

import Inicio from './pages/Inicio';
import Blog from './pages/Blog';
import Tienda from './pages/Tienda';
import Error404 from './pages/Error404';

import Carrito from './components/Carrito';


import styled from "styled-components";

import productos from './data/data';

const pedido = [
    // { id: 1, cantidad: 2, nombre: 'Producto 1' },
    // { id: 2, cantidad: 1, nombre: 'Producto 2' },
    // { id: 3, cantidad: 4, nombre: 'Producto 3' }
]

function App() {

    const [ carrito, setCarrito ] = useState(pedido);


    const agregarAlCarrito = ( idProducto, nombre ) =>{

        const productoExistente = carrito.find( (producto) => producto.id === idProducto );

        if( productoExistente ){
            productoExistente.cantidad  += 1;
            const carritoEditado = carrito.map( producto => producto.id === idProducto ? productoExistente : producto );
            setCarrito( carritoEditado );
        }else{
            const nuevoProducto = {
                id: idProducto,
                cantidad: 1,
                nombre: nombre
            }
            setCarrito([ ...carrito, nuevoProducto ]);
        }

    }


    return (
        <Contenedor>
            <Menu>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/tienda">Tienda</NavLink>
            </Menu>
            
            <main>
                <Routes>
                    <Route path="*" element={ <Error404 /> } />
                    <Route path="/" element={ <Inicio /> } />
                    <Route path="/blog" element={ <Blog /> } />
                    <Route path="/tienda" element={ 
                        <Tienda productos={ productos } agregarAlCarrito={ agregarAlCarrito } /> 
                    } />
                </Routes>
            </main>
            <aside>
                <Carrito carrito={ carrito } setCarrito={ setCarrito } />
            </aside>
        </Contenedor>
    );
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
        opacity: 0.6;
    }
 
    a:hover {
        opacity: 1;
        text-decoration: none;
    }
    a.active {
        opacity: 1;
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;
