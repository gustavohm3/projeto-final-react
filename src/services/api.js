import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const getAlunos = async () => {
  const res = await api.get('/alunos');
  return res.data;
};

export const postAluno = async (aluno) => {
  await api.post('/alunos', aluno);
};

export const deleteAluno = async (id) => {
  await api.delete(`/alunos/${id}`);
};