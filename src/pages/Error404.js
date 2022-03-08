import { NavLink } from "react-router-dom"

const Error404 = () => {
    return (
      <div>
        <h1>Error404</h1>
        <h3>Ruta no encontrada</h3>
        <NavLink to="/">Ir al Inicio</NavLink>
      </div>
    )
  }
  
  export default Error404