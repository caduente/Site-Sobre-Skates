import React, { useEffect, useState } from 'react';

function desafio7(){

  const [nome, setNome] = useState('');
  const [pokemon, setPokemon] = useState(1);
  const [imagem, setImagem] = useState('');
  const [ataques, setAtaques] = useState({});
  const [id, setId] = useState('');
  const [descrição,setDescrição] = useState(0);
  


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((resposta) => resposta.json())
    .then((dados) =>{
      setNome(dados.name);
      setId(dados.id);
      setImagem(dados.sprites.front_default);
      setAtaques(dados.moves);
    });
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
    .then((resposta) => resposta.json())
    .then((dados) =>{
      setDescrição(dados.flavor_text_entries[0].flavor_text);

    });

  },[pokemon]);

  const MudarPokemon = () =>{
    setPokemon(Math.floor(Math.random() * 1000));
  };

  return(
    <div className="d-flex justify-content-center align-items-center min-vh-100" >
      <div className="card shadow" style={{ width: '22rem' }}>
        <div className="card-header text-center">
            <h1 >Quem é esse pokemon?</h1>
            <h3 >Nome: {nome}</h3>
            <h2 >Id: {id}</h2>
            
          </div>

        <img src={imagem} className="card-img-top p-3"  alt=""/>

        <div className="card-body">
          <p>Descrição: {descrição}</p>

          <h6>1 Ataque: {ataques[0]?.move.name}</h6>
          <h6>2 Ataque: {ataques[1]?.move.name}</h6>
          <h6>3 Ataque: {ataques[2]?.move.name}</h6>
          <h6>4 Ataque: {ataques[3]?.move.name}</h6>
        </div>

        <div>
        <button className="btn btn-primary w-100 mt-4" onClick={MudarPokemon}>Descobrir Novo Pokemon</button>
        </div>

      </div> 
    </div>
  );
}

export default desafio7;