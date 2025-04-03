import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

type Credenciais = {
  email: string;
  senha: string;
};

const Login = () => {
  const [credenciais, setCredenciais] = useState<Credenciais>({ email: '', senha: '' });
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de validação
    if(credenciais.email === 'usuario@exemplo.com' && credenciais.senha === '123456') {
      localStorage.setItem('token', 'fake-jwt-token');
      navigate('/');
    } else {
      setErro('Credenciais inválidas!');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Sistema de Autenticação</h2>
        
        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="email"
            value={credenciais.email}
            onChange={(e) => setCredenciais(prev => ({ ...prev, email: e.target.value }))}
            required
          />
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            value={credenciais.senha}
            onChange={(e) => setCredenciais(prev => ({ ...prev, senha: e.target.value }))}
            required
          />
        </div>

        {erro && <div className="mensagem-erro">{erro}</div>}

        <button type="submit">Acessar Sistema</button>
      </form>
    </div>
  );
};

export default Login;