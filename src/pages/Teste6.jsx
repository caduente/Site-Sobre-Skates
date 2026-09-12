import React, { useEffect, useState } from 'react';

function Teste6() {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [foto, setFoto] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  useEffect(() => {

    fetch('https://randomuser.me/api/')
    .then((resposta) => resposta.json())
    .then((perfil) =>{
      setNome(perfil.results[0].name.first);
      setSobrenome(perfil.results[0].name.last);
      setGenero(perfil.results[0].gender);
      setFoto(perfil.results[0].picture.large);

    });

  },[]);

  return (
    <div>
      <div className="card text-center">
        <h2>API de Perfil Falso</h2>
        <h3>Informações da Pessoa</h3>
      </div>
      <hr />
      <div className="card d-inline-block" style={{width: 'fit-content'}}>
        <h4>Nome: {nome} {sobrenome}</h4>
        <p>Genero: {genero}</p>
        <p>
          <img src={foto} alt="" />
        </p>
      </div>
    </div>
  );
}

export default Teste6;
