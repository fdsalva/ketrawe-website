import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "../Home";
import Productos from '../Componentes/pages/Productos/Productos';
import Contacto from '../Componentes/pages/Contacto/Contacto';
;


export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          
          <Route exact path="/" element= {<Home />} />
          <Route exact path="/productos" element= {<Productos />} />
          <Route exact path="/contacto" element= {<Contacto />} /> 

        </Routes>
    </BrowserRouter>
  );
}
