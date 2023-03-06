import { MdShoppingBag } from "react-icons/md";
const Navbar = () => {
  const categorias = [
    { id: 0, nombre: "Accesorios" },
    { id: 1, nombre: "Vestimenta" },
    { id: 2, nombre: "Equipos" },
  ];

  return (
    <div className="navegador">
      <h3>Categorias</h3>

      <div className="categorias">
        {categorias.map((categoria) => {
          return (
            <a key={categoria.id} className="categoria" href="#">
              {categoria.nombre}
            </a>
          );
        })}
      </div>

      <div className="carrito">
        <MdShoppingBag />
        <p id="indicadorCarrito">3</p>
      </div>
    </div>
  );
};

export default Navbar;