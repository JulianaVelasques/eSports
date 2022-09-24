import express, { request, response } from 'express';

const app = express();

//HTTP methods / API RESTful

app.get('/games', (request, response) => {
  return response.json([]);
});

//criação de anúncio
app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});

//listar anúncios de um game específico, não todos
app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anúncio' },
    { id: 2, name: 'Anúncio' },
    { id: 3, name: 'Anúncio' },
    { id: 4, name: 'Anúncio' },
  ]);
});

app.listen(3333);
