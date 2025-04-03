import { useState, useEffect } from 'react';
import './Tarefa.css';

const Tarefa = () => {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  useEffect(() => {
    if(tarefas.length > 0) {
      document.title = `(${tarefas.length}) Tarefas Pendentes`;
    } else {
      document.title = 'Nenhuma tarefa pendente';
    }
  }, [tarefas]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(novaTarefa.trim()) {
      setTarefas(prev => [...prev, novaTarefa]);
      setNovaTarefa('');
    }
  };

  return (
    <div className="tarefa-container">
      <h2>Gerenciador de Tarefas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="lista-tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button 
              onClick={() => setTarefas(prev => prev.filter((_, i) => i !== index))}
              className="botao-remover"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarefa;