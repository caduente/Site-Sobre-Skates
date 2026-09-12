import React, { useEffect, useState } from 'react';

function desafio6() {
  const [titulo, setTitulo] = useState('');
  const [tituloO, setTituloO] = useState('');
  const [descrição, setDescrição] = useState('');
  const [foto, setFoto] = useState('');
  const [filme, setFilme] = useState(0);
  const [data, setData] = useState('');
  const [nota, setNota] = useState('');

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films/')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTitulo(dados[filme].title);
        setTituloO(dados[filme].original_title_romanised);
        setFoto(dados[filme].movie_banner);
        setDescrição(dados[filme].description);
        setData(dados[filme].release_date);
        setNota(dados[filme].rt_score);
      });
  }, [filme]);

  const MudarFilme = () => {
    setFilme(Math.floor(Math.random() * 20));
  };

  return (
    <div>
      <div>
        <h1>Ache um bom filme do Studio Ghibli.</h1>
      </div>
      <div className="card">
        <div>
          <p>
            <img src={foto} alt="" />
          </p>
        </div>
        <div>
          <h3>Titulo: {titulo}</h3>
          <h4>Titulo original: {tituloO}</h4>
        </div>
        <ul>
          <li>
            <p>Desrição: {descrição}</p>
          </li>
          <li>
            <p>Nota:{nota}</p>
          </li>
          <li>
            <p>Data de lançamento: {data}</p>
          </li>
        </ul>
        <button onClick={MudarFilme}>Mudar Filme</button>
      </div>
    </div>
  );
}

export default desafio6;
