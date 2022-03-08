import styled from "styled-components"



const Carrito = ({ carrito, setCarrito }) => {


  return (
    <div>
        <Titulo>Carrito de compras</Titulo>
        { ( carrito.length > 0 ) 
           ? carrito.map( ( producto )=> (
               <Producto key={ producto.id }>
                    <NombreProducto>{ producto.nombre }</NombreProducto>   
                    <Cantidad>{ producto.cantidad }</Cantidad>
                </Producto>
            )) 
           : <Mensaje>No hay productos agregado</Mensaje> 
        } 
    </div>
  )
}

const Titulo = styled.h3`
    margin-bottom: 30px;
    margin-top: 20px;
`

const Producto = styled.div`
    padding: 10px;
    border-bottom: 1px solid #EBEBF3;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 800;
`

const NombreProducto = styled.p`
    font-weight: 700;
    font-size: 16px;
    color: #000;
`

const Cantidad = styled.span`
    background-color: #1d85e8;
    color: #FFF;
    padding: 2px 10px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 30px;
`
const Mensaje = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-top: 120px;
    opacity: 0.4;
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
`

export default Carrito