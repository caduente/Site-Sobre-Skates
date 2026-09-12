import React from 'react';

function Desafio4(){
  const somando = () =>{
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado');

    let soma = numero1+numero2;

    resultado.textContent  = `${numero1} + ${numero2} = ${soma}`;
  }

  const media = () =>{
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);
    const nota4 = Number(document.getElementById('nota4').value);
    const nota5 = Number(document.getElementById('nota5').value);
    const resultadoM = document.getElementById('resultadoM');
    const textoSituacao = document.getElementById('textoSituacao')
    const mediaCorte = Number(document.getElementById('mediaCorte').value);

    let media = (nota1+nota2+nota3+nota4+nota5)/5;

    if (media < mediaCorte) {
      textoSituacao.textContent = 'Você foi reprovado seu NOOB!!';
      textoSituacao.className = 'bg-danger';
    }
    else {
      textoSituacao.textContent = 'Você foi aprovado BRABISSIMO!!';
      textoSituacao.style.backgroundColor = 'green';
    }
    resultadoM.textContent  = `Sua media deu ${media}`;
  }

  const IMC = () =>{
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    const resultadoIMC = document.getElementById('resultadoIMC');
    const grauIMC = document.getElementById('grauIMC');

    let IMC = peso/(altura*altura);
    let situacao = "";

    if (IMC <= 18.5) {
      situacao = `Você esta abaixo do peso`;
    }
    else if(IMC < 24.9) {
      situacao = `Você esta no peso certo(Saudável)`;
    }
    else if(IMC < 29.9) {
      situacao = `Você esta com sobrepeso`;
    }
    else if(IMC < 34.9) {
      situacao = `Você esta com obesidade 	I`;
    }
    else if(IMC < 39.9) {
      situacao = `Você esta com obesidade 	II`;
    }
    else {
      situacao = `Você esta com obesidade grave (Mórbida)`;
    }

    resultadoIMC.textContent = `Seu IMC deu ${IMC}`;
    grauIMC.textContent = situacao;

  }

  const converterGraus = () =>{
    const graus = Number(document.getElementById('graus').value); 
    const temperatura = document.getElementById('temperatura').value;
    const textoGraus = document.getElementById('textoGraus');

    let f = (graus * 1.8)+32;
    let c = (graus - 32)*1.8;

    if (temperatura == "c") {
      textoGraus.textContent = `${graus} °C > ${f} °F`
    }
    else{
      textoGraus.textContent = `${graus} °F > ${c} °C`
    }
  }


  return(
    <div>
      <h2>Calculadoras Diversas</h2>

      <div id="somando" className="card text-center w-25 mx-auto">
        <h3>EASY: Somando dois números</h3>
        <input type="number" id="numero1" placeholder="Digite o N1: "/>
        <input type="number" id="numero2" placeholder="Digite o N2: "/><br/>
        <button onClick={somando}>Calcular</button>
        <p id="resultado"></p>
      </div>
      <br/>
      <div id="media" className="card text-center w-25 mx-auto">
        <h3>Media da nota</h3>
        <input type="number" id="nota1" placeholder="Digite a nota1: "/>
        <input type="number" id="nota2" placeholder="Digite a nota2: "/>
        <input type="number" id="nota3" placeholder="Digite a nota3: "/>
        <input type="number" id="nota4" placeholder="Digite a nota4: "/>
        <input type="number" id="nota5" placeholder="Digite a nota5: "/><br/>

        <input type="text" id="mediaCorte" placeholder="digite qual a nota minima: "/><br/>

        <button onClick={media}>Calcular</button>
        <p id="resultadoM"></p>
        <p id="textoSituacao"></p>
      </div>

      <div id='IMC'className="card text-center w-25 mx-auto">
        <h3>IMC</h3>
        <input type="number" id="peso" placeholder="Digite seu peso em Kg: "/>
        <input type="number" id="altura" placeholder="Digite sua altura em metros: "/>

        <button onClick={IMC}>Calcular</button>
        <p id="resultadoIMC"></p>
        <p id="grauIMC"></p>

      </div>

      <div id='coverterGraus' className="card text-center w-25 mx-auto">
        <h3>Converção de Temperatura</h3>
        <input type="number" id="graus" placeholder="Digite a temperatura: "/>
        <select name="escolhaDeG" id="temperatura">
          <option value="c">Celsius</option>
          <option value="f">Fahrenheit</option>
        </select>

        <button onClick={converterGraus}>Calcular</button>
        <p id="textoGraus"></p>

      </div>


    </div>
  );
}

export default Desafio4;