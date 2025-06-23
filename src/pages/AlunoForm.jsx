import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { postAluno } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function AlunoForm() {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [curso, setCurso] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postAluno({ nome, matricula, curso });
    navigate('/');
  };

  return (
    <Container>
      <h2>Cadastro de Aluno</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Nome" fullWidth margin="normal" value={nome} onChange={(e) => setNome(e.target.value)} />
        <TextField label="Matrícula" fullWidth margin="normal" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
        <TextField label="Curso" fullWidth margin="normal" value={curso} onChange={(e) => setCurso(e.target.value)} />
        <Button type="submit" variant="contained">Cadastrar</Button>
      </form>
    </Container>
  );
}