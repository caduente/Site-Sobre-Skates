import React from 'react';

function Teste8() {
  let pessoa1 = {
    nome: 'Cadu',
    idade: 16,
    psst: 'jogar',

    apresentar() {
      alert(
        `Ola, meu nome é ${this.nome}, eu tenho ${this.idade} anos, e meu passatempo é ${this.psst}.`
      );
    },
  };
  return (
    <div>
      <h1>Objetos</h1>
      <h2>O que é um objeto?</h2>
      <p>
        Um objeto é um tipo de variável, que possui a capacidade de guardar
        várias informações que estão relacionadas entre si
      </p>
      <p>Um objeto possui: Atributos e Métodos</p>
      <p>Atributos: São as variáveis dentro do objeto</p>
      <p>Métodos: São as funções dentro do objeto</p>

      <h2>Exemplos de objetos</h2>
      <h3>Objeto singular: Pessoa</h3>
      <p>
        Nome: {pessoa1.nome}
        <br/>
        Idade: {pessoa1.idade} anos
        <br/>
        Passatempo: {pessoa1.psst}
        <br/>
        <button onClick={() => {pessoa1.apresentar()}}>Apresentar</button>
      </p>
    </div>
  );
}

export default Teste8;
