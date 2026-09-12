import React from 'react';
import {useState} from 'react';

function Teste3(){
  const [numero,setNumero] = useState(0);

  const mudarNumero = () => {
    setNumero(50);
  }
  return(
    <div>
     <h2>Testando useState (Variável de Estado do React)</h2>
     <h3>Número do State: {numero}</h3>
     <button onClick={mudarNumero}>Mudar para 50(via JS)</button> <br/>
      <button onClick={() => setNumero(100)}>Mudar para 100</button>
      <button onClick={() => setNumero(numero+0)}>+0</button>
      <button onClick={() => setNumero(numero-0)}>-0</button>
      <button onClick={() => setNumero(numero+1)}>+1</button>
      <button onClick={() => setNumero(numero-1)}>-1</button>
      <button onClick={() => setNumero(numero*2)}>*2</button>
      <button onClick={() => setNumero(numero/2)}>/2</button>
      <button onClick={() => setNumero(numero**2)}>^2</button>
      <button onClick={() => setNumero(numero**3)}>^3</button>
      <button onClick={() => setNumero(0)}>Resetar</button>

      <input type="number" placeholder="Numero para adcionar"/>
      <button>Mudar para Número</button>
      <button>adcionar Número</button>
    </div>
  );
}

export default Teste3;