import React from 'react';
import {Outlet, Link} from 'react-router-dom';

function MenuDesafios(){
  return(
    <div>
      <nav className="text-center">
        <Link to="desafio1" className="btn btn-warning">Desafio 1</Link>
        <Link to="desafio2" className="btn btn-warning">Desafio 2</Link>
        <Link to="desafio3" className="btn btn-warning">Desafio 3</Link>
        <Link to="desafio4" className="btn btn-warning">Desafio 4</Link>
        <Link to="desafio5" className="btn btn-warning">Desafio 5</Link>
        <Link to="desafio6" className="btn btn-warning">Desafio 6</Link>
        <Link to="desafio7" className="btn btn-warning">Desafio 7</Link>
      </nav>
      <hr/>
      <Outlet/>
    </div>
  );
}

export default MenuDesafios;