"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
//HTTP methods / API RESTful
app.get('/games', (request, response) => {
    return response.json([]);
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
