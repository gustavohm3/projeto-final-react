import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AlunoForm from './pages/AlunoForm';
import ListaAlunos from './pages/ListaAlunos';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ListaAlunos />} />
      <Route path="/cadastro" element={<AlunoForm />} />
    </Routes>
  );
}