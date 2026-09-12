import React, { useEffect } from 'react';
import { useState } from 'react';

function desafio5() {
  const [cliques, setCliques] = useState(0);
  const [forca, setForca] = useState(1);
  const [conquista, setConquista] = useState('Não tem conquista ainda');
  const [estado, setEstado] = useState(``)

  useEffect(() => {
    document.tittle = `conquistas: ${conquista}`;
    if (cliques >= 1){
      setEstado('')
    }
    else if (cliques >= 10){
      setEstado('')
    }
    else if (cliques >= 50){
      setEstado('')
    }
    else if (cliques >= 67){
      setEstado('')
    }
    else if (cliques >= 250){
      setEstado('')
    }
    else if (cliques >= 500){
      setEstado('')
    }
    else if (cliques >= 1000){
      setEstado('')
    }
    else if (cliques >= 2000){
      setEstado('')
    }
    else if (cliques >= 666777){
      setEstado('66ou')
    }
    else if (cliques >= 555555){
      setEstado('ra')
    }
    else if (cliques >= 400000){
      setEstado('4n')
    }
    else if (cliques >= 200000){
      setEstado('2')
    }
    else if (cliques >= 150000){
      setEstado('1')
    }
    else if (cliques >= 1000){
      setEstado('1000 clicks: vc já é um cigarrete')
    }
    else if (cliques >= 500){
      setEstado('500 clicks: vc ja é um cigarro')
    }
    else if (cliques >= 250){
      setEstado('250 clicks: vc ja é uma cigarra')
    }
    else if (cliques >= 67){
      setEstado('67 clicks: cigarras legais odeiam esse numero')
    }
    else if (cliques >= 50){
      setEstado('50 clicks: um bom começo')
    }
    else if (cliques >= 10){
      setEstado('10 clik: cigarrinha')
    }
    else if (cliques >= 1){
      setEstado('1 click: Começando a cigarrar')
    }
    
  }, [conquista])

  return (
    <div className="d-flex flax row mb-2">
      <div className="d-flex p-2">
        <h2>Cigarra Clicker</h2>
        <button onClick={() => setCliques(cliques + forca)}>
          <img
            src="https://png.pngtree.com/png-clipart/20250419/original/pngtree-cicada-close-up---detailed-insect-photography-png-image_20819522.png"
            alt=""
          />
        </button>

        <h3>Loja</h3>
        <p>dinheiro:{cliques}</p>
        {cliques >= 10 && (
          <button
            onClick={() => {
              setForca(forca + 1);
              setCliques(cliques - 10);
            }}
          >
            +1 clique: x10
          </button>
        )}
        {cliques >= 50 && (
          <button
            onClick={() => {
              setForca(forca + 10);
              setCliques(cliques - 50);
            }}
          >
            +10 cliques x50
          </button>
        )}
        {cliques >= 250 && (
          <button
            onClick={() => {
              setForca(forca + 50);
              setCliques(cliques - 250);
            }}
          >
            +50 cliques x250
          </button>
        )}
        {cliques >= 500 && (
          <button
            onClick={() => {
              setForca(forca + 100);
              setCliques(cliques - 500);
            }}
          >
            +100 cliques x500
          </button>
        )}
        {cliques >= 10000 && (
          <button
            onClick={() => {
              setForca(forca + 1000);
              setCliques(cliques - 10000);
            }}
          >
            +1000 cliques x10000
          </button>
        )}
      </div>

      <div>
        <p className="lead">Total de cigarras colecionadas: {cliques}</p>
      </div>

      <div>
        <h3>Ultima conquista: </h3>
      </div>

      <div className="text-center">
        <h5>Conquistas</h5>
        {
          (cliques >= 1 && <h5>1 click: Começando a cigarrar</h5>)
        }
        {
          (cliques >= 10 && <h5>10 clicks: cigarrinha</h5>)
        }
        {
          (cliques >= 50 && <h5>50 clicks: um bom começo</h5>)
        }
        {
          (cliques >= 67 && (
            <h5>67 clicks: cigarras legais odeiam esse numero</h5>
          ))
        }
        {
          (cliques >= 250 && <h5>250 clicks: vc ja é uma cigarra</h5>)
        }
        {
          (cliques >= 500 && <h5>500 clicks: vc ja é um cigarro</h5>)
        }
        {
          (cliques >= 1000 && <h5>1000 clicks: vc já é um cigarrete</h5>)
        }
        {
          (cliques >= 2000 && <h5>2000 clicks: cigarrão</h5>)
        }
        {
          (cliques >= 20000 && <h5>3000 clicks: vc ja é um charuto</h5>)
        }
        {
          (cliques >= 40000 && (
            <h5>4000 clicks: n tem mas conquistas seu ganacioso</h5>
          ))
        }
        {
          (cliques >= 100000 && <h5>100000 clicks: vai embora cara</h5>)
        }
        {
          (cliques >= 150000 && <h5>150000 clicks: meu Deus</h5>)
        }
        {
          (cliques >= 200000 && <h5>200000 clicks: vagabundo é foda</h5>)
        }
        {
          (cliques >= 400000 && (
            <h5>400000 clicks: vc n tem nada melhor pra fazer n</h5>
          ))
        }
        {
          (cliques >= 555555 && <h5>555555 clicks: a sorte te espera </h5>)
        }
        {
          (cliques >= 666777 && <h5>666777 clicks: agr acabou</h5>)
        }
        {
          (cliques >= 1000000 && <h5>100000 clicks: vai embora </h5>)
        }
      </div>

      {cliques > 1000000 && setCliques(1000000)}
    </div>
  );
}

export default desafio5;
