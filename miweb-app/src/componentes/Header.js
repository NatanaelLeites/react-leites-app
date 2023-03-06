import fflogo from "../archivos/fflogo.jpg";
function Header() {
  return (
    <div className="cabecera">
      <img className="logo" src={fflogo}></img>
      <h1>
        <a href="..../public/index.html">
          FightFit<span>SHOP</span>
        </a>
      </h1>
      <input className="buscador" placeholder="Buscar"></input>
    </div>
  );
}

export default Header;