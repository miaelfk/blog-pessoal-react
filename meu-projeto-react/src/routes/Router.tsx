import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Contador from '../pages/contador/Contador';
import Tarefa from '../pages/tarefa/Tarefa';
import Login from '../pages/login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home titulo="Home Dinâmico" texto="Bem-vindo!" />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/tarefa" element={<Tarefa />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;