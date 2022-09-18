import express from 'express';

//To create the app
const app = express();

//First route of our application
//GET method => 'The address the user will be accessing', function that
//will be executed when the user access the route ads
//www.myapi.com/ads
app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anúncio' },
    { id: 2, name: 'Anúncio' },
    { id: 3, name: 'Anúncio' },
    { id: 4, name: 'Anúncio' },
  ]);
});

//Nossa função precisa receber dois parametros (request, response):
//request => busca dados relacionados à requisição;
//response => devolver uma resposta

//Nossa app vai estar rodando no localhost, então preciso colocar uma porta
//para conseguir visualizar ela
app.listen(3333);
