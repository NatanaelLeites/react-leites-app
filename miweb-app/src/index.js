import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
import ItemListContainer from "./componentes/ItemListContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Header />
  <ItemListContainer greeting="Bienvenid@ a FightFit SHOP"/>
  <Navbar />
  </>
);
