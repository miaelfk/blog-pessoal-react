import { useState } from 'react';
import './Contador.css';

const Contador = () => {
  const [valor, setValor] = useState<number>(0);

  const handleIncremento = () => setValor(prev => prev + 1);
  const handleDecremento = () => setValor(prev => prev - 1);
  const handleReset = () => setValor(0);

  return (
    <div className="contador-container">
      <h2>Contador Interativo</h2>
      <div className="display-contador">{valor}</div>
      <div className="botoes-container">
        <button className="botao-incremento" onClick={handleIncremento}>
          ➕ Incrementar
        </button>
        <button className="botao-decremento" onClick={handleDecremento}>
          ➖ Decrementar
        </button>
        <button className="botao-reset" onClick={handleReset}>
          🔄 Resetar
        </button>
      </div>
    </div>
  );
};

export default Contador;