import Productos from "../components/Productos"


const Tienda = ({ productos, agregarAlCarrito }) => {
    return (
      <div>
        <h1>Tienda</h1>
        <Productos productos={ productos } agregarAlCarrito={ agregarAlCarrito } />
      </div>
    )
  }
  
  export default Tienda