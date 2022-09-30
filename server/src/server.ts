import express, { request, response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
//vai fazer a conexão com o banco
const prisma = new PrismaClient();

//HTTP methods / API RESTful

//findMany é um método assíncrono, então usar a síntaxe async / await
app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany();

  return response.json(games);
});

//criação de anúncio
app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});

//listar anúncios de um game específico, não todos
app.get('/games/:id/ads', (request, response) => {
  // const gameId = request.params.id;

  return response.json([
    { id: 1, name: 'Anúncio' },
    { id: 2, name: 'Anúncio' },
    { id: 3, name: 'Anúncio' },
    { id: 4, name: 'Anúncio' },
  ]);
});

//pegar de um ads específico um discord
app.get('/ads/:id/discord', (request, response) => {
  // const adId = request.params.id;

  return response.json([]);
});

app.listen(3333);
