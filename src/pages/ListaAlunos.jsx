import React, { useEffect, useState } from 'react';
import { getAlunos, deleteAluno } from '../services/api';
import { Button, Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const navigate = useNavigate();

  const carregarAlunos = async () => {
    const data = await getAlunos();
    setAlunos(data);
  };

  const handleDelete = async (id) => {
    await deleteAluno(id);
    carregarAlunos();
  };

  useEffect(() => {
    carregarAlunos();
  }, []);

  return (
    <Container>
      <h2>Lista de Alunos</h2>
      <Button variant="contained" onClick={() => navigate('/cadastro')}>Novo Aluno</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Matrícula</TableCell>
            <TableCell>Curso</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alunos.map((aluno) => (
            <TableRow key={aluno.id}>
              <TableCell>{aluno.nome}</TableCell>
              <TableCell>{aluno.matricula}</TableCell>
              <TableCell>{aluno.curso}</TableCell>
              <TableCell>
                <Button color="error" onClick={() => handleDelete(aluno.id)}>Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}