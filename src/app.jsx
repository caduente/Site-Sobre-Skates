//bibliotecas
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//menus
import MenuTestes from './pages/menuTestes.jsx';
import MenuGeral from './pages/menuGeral.jsx';
import MenuDesafios from './pages/menuDesafios.jsx';

//paginas
import Padrao from './pages/padrao.jsx';
import Erro from './pages/erro.jsx';
import Modelo from './pages/modelo.jsx';
import Header from './pages/header.jsx';

import Teste1 from './pages/Teste1.jsx';
import Teste0 from './pages/Teste0.jsx';
import Teste2 from './pages/Teste2.jsx';
import Teste3 from './pages/Teste3.jsx';
import Teste4 from './pages/Teste4.jsx';
import Teste5 from './pages/Teste5.jsx';
import Teste6 from './pages/Teste6.jsx';
import Teste7 from './pages/Teste7.jsx';
import Teste8 from './pages/Teste8.jsx';

//desafios
import Desafio1 from './pages/desafio1.jsx';
import Desafio2 from './pages/desafio2.jsx';
import Desafio3 from './pages/desafio3.jsx';
import Desafio4 from './pages/desafio4.jsx';
import Desafio5 from './pages/desafio5.jsx';
import Desafio6 from './pages/desafio6.jsx';
import Desafio7 from './pages/desafio7.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MenuGeral />
        <Routes>
          <Route path="/" element={<Padrao />} />
          <Route path="modelo" element={<Modelo />} />

          <Route path="menu-teste" element={<MenuTestes />}>
            <Route path="teste1" element={<Teste1 />} />
            <Route path="teste0" element={<Teste0 />} />
            <Route path="teste2" element={<Teste2 />} />
            <Route path="teste3" element={<Teste3 />} />
            <Route path="teste4" element={<Teste4 />} />
            <Route path="teste5" element={<Teste5 />} />
            <Route path="teste6" element={<Teste6 />} />
            <Route path="teste7" element={<Teste7 />} />
            <Route path="teste8" element={<Teste8 />} />
          </Route>
          <Route path="menu-desafio" element={<MenuDesafios />}>
            <Route path="desafio1" element={<Desafio1 />} />
            <Route path="desafio2" element={<Desafio2 />} />
            <Route path="desafio3" element={<Desafio3 />} />
            <Route path="desafio4" element={<Desafio4 />} />
            <Route path="desafio5" element={<Desafio5 />} />
            <Route path="desafio6" element={<Desafio6 />} />
            <Route path="desafio7" element={<Desafio7 />} />
          </Route>

          <Route path="*" element={<Erro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
