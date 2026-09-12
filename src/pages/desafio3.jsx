import React from 'react';

function Desafio3(){

const criarArtigo = ()=>{
  const artTitulo = document.getElementById('artTitulo');
  const artTexto = document.getElementById('artTexto');
  const artFoto = document.getElementById('artFoto');
  const titulo = document.getElementById('titulo');
  const texto = document.getElementById('texto');
  const foto = document.getElementById('foto');

  titulo.textContent = artTitulo.value;
  texto.textContent = artTexto.value;
  foto.src =  artFoto.value;
  }

  return(
    <div>
      <div  className="card w-50 mx-auto">
       <h2>Artigo de Pesquisa</h2>
       <input type="text" placeholder="Titulo do artigo" id="artTitulo"/>
        <input type="text" placeholder="Texto do artigo" id="artTexto"/>
        <input type="text" placeholder="URL da foto" id="artFoto"/>
        <br/>
       <button onClick={criarArtigo}>Criar Artigo</button>

        <div className="text-center">
          <h3 id="titulo" className="display-3"></h3>
          <p id="texto" className=""></p>
          <img src="" alt="" id="foto"/>
        </div>
      </div>
    </div>
  );
}

export default Desafio3;